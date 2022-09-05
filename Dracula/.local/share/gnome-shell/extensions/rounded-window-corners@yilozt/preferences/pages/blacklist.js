// imports.gi
const GObject           = imports.gi.GObject

// Local Modules
import { template_url } from '../../utils/io.js'
import { show_err_msg } from '../../utils/prefs.js'
import settings         from '../../utils/settings.js'
import constants        from '../../utils/constants.js'
import connections      from '../../utils/connections.js'
import AppRow           from '../widgets/app-row.js'
const Gtk               = imports.gi.Gtk

// --------------------------------------------------------------- [end imports]

/** Black list Preferences Page */
export default GObject.registerClass (
    {
        Template: template_url (import.meta.url, './blacklist.ui'),
        GTypeName: 'RoundedWindowCornersPrefsBlacklist',
        InternalChildren: ['black_list_group', 'add_row_btn'],
    },
    class extends Gtk.Box {
        _init () {
            super._init ()
            this.black_list = settings ().black_list

            // Read blacklist from settings, and add it to this._black_list
            this.black_list.forEach ((name) => this.on_add_row (name))

            connections.get ().connect (this._add_row_btn, 'clicked', () => {
                if (this.black_list.includes ('')) {
                    return
                }

                this.on_add_row ()
                this.black_list.push ('')
                settings ().black_list = this.black_list
            })

            connections
                .get ()
                .connect (this._black_list_group, 'row-activated', (me, row) => {
                    if (row instanceof AppRow) {
                        row.on_expanded_changed ()
                    }
                })
        }

        show_err_msg (item) {
            const title = `"${item}": Can't add to list, because it has exists`
            show_err_msg (title)
        }

        // --------------------------------------------------- [signal handlers]

        on_delete_row (row, title) {
            this.black_list.splice (this.black_list.indexOf (title), 1)
            settings ().black_list = this.black_list
            this._black_list_group.remove (row)
        }

        /** Add a row to black list */
        on_add_row (title = '') {
            const handlers = {
                on_delete: (row, title) => this.on_delete_row (row, title),
                on_title_changed: (old_title, new_title) =>
                    this.on_title_changed (old_title, new_title),
            }

            const row = new AppRow (handlers)
            row.title = title

            if (!title) {
                row.description = constants.TIPS_EMPTY
            }

            this._black_list_group.append (row)
        }

        /** Called when title of item need to changed  */
        on_title_changed (old_title, new_title) {
            if (this.black_list.includes (new_title)) {
                this.show_err_msg (new_title)
                return false
            }

            const old_idx = this.black_list.indexOf (old_title)
            this.black_list.splice (old_idx, 1, new_title)

            settings ().black_list = this.black_list

            return true
        }
    }
)
