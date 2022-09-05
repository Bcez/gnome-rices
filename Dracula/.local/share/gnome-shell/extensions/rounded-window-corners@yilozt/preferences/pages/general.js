// imports.gi
const GObject              = imports.gi.GObject
const Gdk                  = imports.gi.Gdk
const Gio                  = imports.gi.Gio

// local modules
import settings            from '../../utils/settings.js'
import connections         from '../../utils/connections.js'
import { list_children }   from '../../utils/prefs.js'
import { template_url }    from '../../utils/io.js'
import { _log }            from '../../utils/log.js'
import RoundedCornersItems from '../widgets/rounded-corners-item.js'
import EditShadowWindow    from '../widgets/edit-shadow-window.js'
import ResetDialog         from '../widgets/reset-dialog.js'

// types
const Gtk                  = imports.gi.Gtk

// --------------------------------------------------------------- [end imports]

export default GObject.registerClass (
    {
        Template: template_url (import.meta.url, './general.ui'),
        GTypeName: 'RoundedWindowCornersPrefsGeneral',

        // Widgets export from template ui
        InternalChildren: [
            'global_settings_preferences_group',
            'enable_log_switch',
            'skip_libadwaita_app_switch',
            'skip_libhandy_app_switch',
            'border_width_ajustment',
            'border_color_button',
            'edit_shadow_row',
            'applications_group',
            'reset_preferences_btn',
        ],
    },
    class extends Gtk.Box {
        _init () {
            super._init ()

            this.config_items = new RoundedCornersItems ()

            this.build_ui ()

            connections
                .get ()
                .connect (settings ().g_settings, 'changed', (settings, key) =>
                    this._on_settings_changed (key)
                )

            settings ().bind (
                'debug-mode',
                this._enable_log_switch,
                'active',
                Gio.SettingsBindFlags.DEFAULT
            )
            settings ().bind (
                'skip-libadwaita-app',
                this._skip_libadwaita_app_switch,
                'active',
                Gio.SettingsBindFlags.DEFAULT
            )
            settings ().bind (
                'skip-libhandy-app',
                this._skip_libhandy_app_switch,
                'active',
                Gio.SettingsBindFlags.DEFAULT
            )
            settings ().bind (
                'border-width',
                this._border_width_ajustment,
                'value',
                Gio.SettingsBindFlags.DEFAULT
            )

            const color = settings ().border_color
            this._border_color_button.rgba = new Gdk.RGBA ({
                red: color[0],
                green: color[1],
                blue: color[2],
                alpha: color[3],
            })

            connections
                .get ()
                .connect (this._border_color_button, 'color-set', (source) => {
                    const color = source.get_rgba ()
                    settings ().border_color = [
                        color.red,
                        color.green,
                        color.blue,
                        color.alpha,
                    ]
                })

            // Handler active event for BoxList
            connections
                .get ()
                .connect (
                    this._global_settings_preferences_group,
                    'row-activated',
                    (box, row) => {
                        if (row == this.config_items._paddings_row) {
                            this.config_items.update_revealer ()
                        }
                    }
                )

            connections
                .get ()
                .connect (
                    this._applications_group,
                    'row-activated',
                    (box, row) => {
                        if (row === this._edit_shadow_row) {
                            this._show_edit_shadow_window_cb ()
                        }
                    }
                )

            connections
                .get ()
                .connect (this._reset_preferences_btn, 'clicked', () => {
                    new ResetDialog ().show ()
                })
        }

        vfunc_root () {
            super.vfunc_root ()
            const win = this.root

            // Disconnect all signal when close prefs
            win.connect ('close-request', () => {
                _log ('Disconnect Signals')
                connections.get ().disconnect_all ()
                connections.del ()
            })
        }

        build_ui () {
            list_children (this.config_items).forEach ((i) => {
                this.config_items.remove (i)
                this._global_settings_preferences_group.append (i)
            })
            // Bind Variants
            this.config_items.cfg = settings ().global_rounded_corner_settings
            this.config_items.watch ((cfg) => {
                settings ().global_rounded_corner_settings = cfg
            })
        }

        // ---------------------------------------------------- [signal handler]

        /** Called when click 'Window Shadow' action row */
        _show_edit_shadow_window_cb () {
            const root = this.root
            const win = new EditShadowWindow ()
            win.application = root.application
            win.present ()
            root.hide ()
            win.connect ('close-request', () => {
                root.show ()
                win.destroy ()
            })
        }

        /** Update UI when settings changed  */
        _on_settings_changed (key) {
            switch (key) {
            case 'border-color':
                {
                    const color = settings ().border_color
                    this._border_color_button.rgba = new Gdk.RGBA ({
                        red: color[0],
                        green: color[1],
                        blue: color[2],
                        alpha: color[3],
                    })
                }
                break
            case 'border-width':
                this._border_width_ajustment.value = settings ().border_width
                break
            case 'global-rounded-corner-settings':
                this.config_items.cfg =
                        settings ().global_rounded_corner_settings
                break
            default:
            }
        }
    }
)
