const GObject       = imports.gi.GObject
const Gtk           = imports.gi.Gtk
import { _log }     from '../../utils/log.js'
import settings     from '../../utils/settings.js'

class Cfg {
    constructor (description) {
        this.reset = false
        this.description = description
    }
}

export default GObject.registerClass (
    {},
    class extends Gtk.Dialog {
        _init () {
            super._init ({
                use_header_bar: 1,
                modal: true,
                title: 'Reset Preferences',
            })

            this._all_check_btns = []

            this.set_modal (true)

            this.add_button ('Apply', Gtk.ResponseType.APPLY)
            this.add_button ('Cancel', Gtk.ResponseType.CANCEL)

            this.connect ('response', (source, id) => {
                if (id === Gtk.ResponseType.CANCEL) {
                    this.destroy ()
                }
                if (id === Gtk.ResponseType.APPLY) {
                    this.apply ()
                }
            })

            this._init_cfg ()
            this._build_ui ()
        }

        _init_cfg () {
            this._reset_keys = {
                'skip-libadwaita-app': new Cfg ('Skip LibAdwaita Applications'),
                'skip-libhandy-app': new Cfg ('Skip LibHandy Applications'),
                'focused-shadow': new Cfg ('Focus Window Shadow Style'),
                'unfocused-shadow': new Cfg ('Unfocus Window Shadow Style'),
                'border-width': new Cfg ('Border Width'),
                'border-color': new Cfg ('Border Color'),
                'debug-mode': new Cfg ('Enable Log'),
            }

            this._reset_corners_cfg = {
                border_radius: new Cfg ('Border Radius'),
                padding: new Cfg ('Padding'),
                keep_rounded_corners: new Cfg (
                    'Keep Rounded Corners when Maximized or Fullscreen'
                ),
                smoothing: new Cfg ('Corner Smoothing'),
            }
        }

        _build_ui () {
            const content = this.get_content_area ()
            content.orientation = Gtk.Orientation.VERTICAL
            content.spacing = 8

            // Title
            content.append (
                new Gtk.Label ({
                    label: 'Select Items to reset',
                    css_classes: ['heading'],
                    halign: Gtk.Align.START,
                })
            )

            // Select All Checkbox
            const select_all_check_btn = new Gtk.CheckButton ()
            const select_all_label = new Gtk.Label ({
                label: 'Select All',
            })
            const row = new Gtk.Box ()
            row.append (select_all_check_btn)
            row.append (select_all_label)
            content.append (row)

            select_all_check_btn.connect ('toggled', (btn) => {
                this._all_check_btns.forEach ((b) => (b.active = btn.active))
            })

            const build = (cfg) => {
                Object.keys (cfg).forEach ((key) => {
                    const item = new Gtk.Box ()
                    const check_btn = new Gtk.CheckButton ({
                        active: false,
                        name: key,
                    })
                    check_btn.connect ('toggled', (source) =>
                        this.on_toggled (source)
                    )
                    item.append (check_btn)
                    item.append (Gtk.Label.new (cfg[key].description))
                    content.append (item)

                    this._all_check_btns.push (check_btn)
                })
            }

            build (this._reset_corners_cfg)
            build (this._reset_keys)
        }

        on_toggled (source) {
            const k = source.name
            let v = this._reset_corners_cfg[k]
            if (v !== undefined) {
                v.reset = source.active
                return
            }

            v = this._reset_keys[k]
            if (v !== undefined) {
                v.reset = source.active
                return
            }
        }

        apply () {
            for (const k of Object.keys (this._reset_keys)) {
                if (this._reset_keys[k]?.reset === true) {
                    settings ().g_settings.reset (k)
                    _log ('Reset ' + k)
                }
            }

            const key = 'global-rounded-corner-settings'
            const default_cfg = settings ()
                .g_settings.get_default_value (key)
                ?.recursiveUnpack ()
            const current_cfg = settings ().global_rounded_corner_settings
            for (const k of Object.keys (this._reset_corners_cfg)) {
                const _k = k
                if (this._reset_corners_cfg[_k]?.reset === true) {
                    current_cfg[_k] = default_cfg[_k]
                    _log ('Reset ' + k)
                }
            }
            settings ().global_rounded_corner_settings = current_cfg

            this.destroy ()
        }
    }
)
