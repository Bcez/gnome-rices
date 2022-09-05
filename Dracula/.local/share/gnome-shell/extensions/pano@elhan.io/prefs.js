imports.gi.versions.Gtk = '4.0';
var prefs = (function (adw1, gdk4, gio2, gtk4, gobject2, glib2) {
    'use strict';

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    // Taken from https://github.com/material-shell/material-shell/blob/main/src/utils/gjs.ts
    /// Decorator function to call `GObject.registerClass` with the given class.
    /// Use like
    /// ```
    /// @registerGObjectClass
    /// export class MyThing extends GObject.Object { ... }
    /// ```
    function registerGObjectClass(target) {
        // Note that we use 'hasOwnProperty' because otherwise we would get inherited meta infos.
        // This would be bad because we would inherit the GObjectName too, which is supposed to be unique.
        if (Object.prototype.hasOwnProperty.call(target, 'metaInfo')) {
            // eslint-disable-next-line
            // @ts-ignore
            // eslint-disable-next-line
            return gobject2.registerClass(target.metaInfo, target);
        }
        else {
            // eslint-disable-next-line
            // @ts-ignore
            return gobject2.registerClass(target);
        }
    }

    const logger = (prefix) => (content) => log(`[pano] [${prefix}] ${content}`);
    const getAppDataPath = () => `${glib2.get_user_data_dir()}/${getCurrentExtension().metadata.uuid}`;
    const getDbPath = () => {
        const path = getCurrentExtensionSettings().get_string('database-location');
        if (!path) {
            return getAppDataPath();
        }
        return path;
    };
    const getCurrentExtension = () => imports.misc.extensionUtils.getCurrentExtension();
    const getCurrentExtensionSettings = () => imports.misc.extensionUtils.getSettings();
    const initTranslations = () => imports.misc.extensionUtils.initTranslations(getCurrentExtension().metadata.uuid);
    const _ = imports.gettext.domain(getCurrentExtension().metadata.uuid).gettext;
    imports.gettext.domain(getCurrentExtension().metadata.uuid).ngettext;

    const debug = logger('prefs');
    let Preferences = class Preferences extends adw1.PreferencesGroup {
        constructor() {
            super();
            this.settings = getCurrentExtensionSettings();
            this.fileChooser = new gtk4.FileChooserNative({
                modal: true,
                title: _('Choose pano database location'),
                action: gtk4.FileChooserAction.SELECT_FOLDER,
                accept_label: 'Select',
            });
            this.fileChooser.set_current_folder(gio2.File.new_for_path(`${getDbPath()}`));
            this.fileChooser.connect('response', (chooser, response) => {
                if (response !== gtk4.ResponseType.ACCEPT) {
                    this.fileChooser.hide();
                    return;
                }
                const dir = chooser.get_file();
                if (dir && dir.query_exists(null) && !dir.get_child('pano.db').query_exists(null)) {
                    const path = dir.get_path();
                    if (path) {
                        this.settings.set_string('database-location', path);
                    }
                }
                else {
                    const md = new gtk4.MessageDialog({
                        text: _('Failed to select directory'),
                        transient_for: this.get_root(),
                        destroy_with_parent: true,
                        modal: true,
                        visible: true,
                        buttons: gtk4.ButtonsType.OK,
                    });
                    md.connect('response', () => {
                        md.destroy();
                    });
                }
                this.fileChooser.hide();
            });
            const prefGroup = new adw1.PreferencesGroup();
            prefGroup.connect('map', () => {
                const parent = this.get_root();
                parent.width_request = 480;
                parent.height_request = 640;
                parent.resizable = false;
                this.fileChooser.set_transient_for(parent);
            });
            this.add(prefGroup);
            const dbRow = new adw1.ActionRow({
                title: _('Database Location'),
                subtitle: `<b>${getDbPath()}/pano.db</b>`,
            });
            prefGroup.add(dbRow);
            const dbLocationButton = new gtk4.Button({
                margin_top: 10,
                margin_bottom: 10,
                icon_name: 'document-open-symbolic',
            });
            dbLocationButton.connect('clicked', () => {
                this.fileChooser.show();
            });
            dbRow.add_suffix(dbLocationButton);
            dbRow.set_activatable_widget(dbLocationButton);
            this.settings.connect('changed::database-location', () => {
                this.fileChooser.set_current_folder(gio2.File.new_for_path(`${getDbPath()}`));
                dbRow.set_subtitle(`<b>${getDbPath()}/pano.db</b>`);
            });
            const historyRow = new adw1.ActionRow({
                title: _('History Length'),
                subtitle: _('You can limit your clipboard history length between 10 - 500'),
            });
            prefGroup.add(historyRow);
            const historyEntry = new gtk4.SpinButton({
                adjustment: new gtk4.Adjustment({ step_increment: 10, lower: 10, upper: 500 }),
                value: this.settings.get_int('history-length'),
                margin_bottom: 10,
                margin_top: 10,
            });
            this.settings.bind('history-length', historyEntry, 'value', gio2.SettingsBindFlags.DEFAULT);
            historyRow.add_suffix(historyEntry);
            historyRow.set_activatable_widget(historyEntry);
            const shortcutRow = new adw1.ActionRow({
                title: _('Global Shortcut'),
                subtitle: _('Allows you to toggle visibility of the clipboard manager'),
            });
            prefGroup.add(shortcutRow);
            const shortcutLabel = new gtk4.ShortcutLabel({
                disabled_text: _('Select a shortcut'),
                accelerator: this.settings.get_string('shortcut'),
                margin_bottom: 10,
                margin_top: 10,
            });
            this.settings.bind('shortcut', shortcutLabel, 'accelerator', gio2.SettingsBindFlags.DEFAULT);
            shortcutRow.connect('activated', () => {
                const ctl = new gtk4.EventControllerKey();
                const content = new adw1.StatusPage({
                    title: _('New shortcut'),
                    icon_name: 'preferences-desktop-keyboard-shortcuts-symbolic',
                });
                const editor = new adw1.Window({
                    modal: true,
                    transient_for: this.get_root(),
                    hide_on_close: true,
                    width_request: 320,
                    height_request: 240,
                    resizable: false,
                    content,
                });
                editor.add_controller(ctl);
                // See https://github.com/tuberry/color-picker/blob/1a278db139f00787e365fce5977d30b535529edb/color-picker%40tuberry/prefs.js
                ctl.connect('key-pressed', (_, keyval, keycode, state) => {
                    let mask = state & gtk4.accelerator_get_default_mod_mask();
                    mask &= ~gdk4.ModifierType.LOCK_MASK;
                    if (!mask && keyval === gdk4.KEY_Escape) {
                        editor.close();
                        return gdk4.EVENT_STOP;
                    }
                    if (!this.isValidBinding(mask, keycode, keyval) || !this.isValidAccel(mask, keyval)) {
                        return gdk4.EVENT_STOP;
                    }
                    this.settings.set_string('shortcut', gtk4.accelerator_name_with_keycode(null, keyval, keycode, mask));
                    editor.destroy();
                    return gdk4.EVENT_STOP;
                });
                editor.present();
            });
            shortcutRow.add_suffix(shortcutLabel);
            shortcutRow.set_activatable_widget(shortcutLabel);
            const clearHistoryRow = new adw1.ActionRow({
                title: _('Clear History'),
                subtitle: _('Clears the clipboard database and cache'),
            });
            prefGroup.add(clearHistoryRow);
            const clearHistoryButton = new gtk4.Button({
                css_classes: ['destructive-action'],
                label: _('Clear'),
                margin_top: 10,
                margin_bottom: 10,
            });
            clearHistoryButton.connect('clicked', () => {
                const md = new gtk4.MessageDialog({
                    text: _('Are you sure you want to clear history?'),
                    transient_for: this.get_root(),
                    destroy_with_parent: true,
                    modal: true,
                    visible: true,
                    buttons: gtk4.ButtonsType.OK_CANCEL,
                });
                md.get_widget_for_response(gtk4.ResponseType.OK)?.add_css_class('destructive-action');
                md.connect('response', (_, response) => {
                    if (response === gtk4.ResponseType.OK) {
                        gio2.DBus.session.call('org.gnome.Shell', '/io/elhan/Pano', 'io.elhan.Pano', 'clearHistory', null, null, gio2.DBusCallFlags.NONE, -1, null, null);
                    }
                    md.destroy();
                });
            });
            clearHistoryRow.add_suffix(clearHistoryButton);
        }
        keyvalIsForbidden(keyval) {
            return [
                gdk4.KEY_Home,
                gdk4.KEY_Left,
                gdk4.KEY_Up,
                gdk4.KEY_Right,
                gdk4.KEY_Down,
                gdk4.KEY_Page_Up,
                gdk4.KEY_Page_Down,
                gdk4.KEY_End,
                gdk4.KEY_Tab,
                gdk4.KEY_KP_Enter,
                gdk4.KEY_Return,
                gdk4.KEY_Mode_switch,
            ].includes(keyval);
        }
        isValidAccel(mask, keyval) {
            return gtk4.accelerator_valid(keyval, mask) || (keyval === gdk4.KEY_Tab && mask !== 0);
        }
        isValidBinding(mask, keycode, keyval) {
            return !(mask === 0 ||
                (mask === gdk4.ModifierType.SHIFT_MASK &&
                    keycode !== 0 &&
                    ((keyval >= gdk4.KEY_a && keyval <= gdk4.KEY_z) ||
                        (keyval >= gdk4.KEY_A && keyval <= gdk4.KEY_Z) ||
                        (keyval >= gdk4.KEY_0 && keyval <= gdk4.KEY_9) ||
                        (keyval >= gdk4.KEY_kana_fullstop && keyval <= gdk4.KEY_semivoicedsound) ||
                        (keyval >= gdk4.KEY_Arabic_comma && keyval <= gdk4.KEY_Arabic_sukun) ||
                        (keyval >= gdk4.KEY_Serbian_dje && keyval <= gdk4.KEY_Cyrillic_HARDSIGN) ||
                        (keyval >= gdk4.KEY_Greek_ALPHAaccent && keyval <= gdk4.KEY_Greek_omega) ||
                        (keyval >= gdk4.KEY_hebrew_doublelowline && keyval <= gdk4.KEY_hebrew_taf) ||
                        (keyval >= gdk4.KEY_Thai_kokai && keyval <= gdk4.KEY_Thai_lekkao) ||
                        (keyval >= gdk4.KEY_Hangul_Kiyeog && keyval <= gdk4.KEY_Hangul_J_YeorinHieuh) ||
                        (keyval === gdk4.KEY_space && mask === 0) ||
                        this.keyvalIsForbidden(keyval))));
        }
    };
    Preferences = __decorate([
        registerGObjectClass
    ], Preferences);
    const init = () => {
        debug('prefs initialized');
        initTranslations();
    };
    const buildPrefsWidget = () => new Preferences();
    var prefs = { init, buildPrefsWidget };

    return prefs;

})(imports.gi.Adw, imports.gi.Gdk, imports.gi.Gio, imports.gi.Gtk, imports.gi.GObject, imports.gi.GLib);
var init = prefs.init;
var buildPrefsWidget = prefs.buildPrefsWidget;
