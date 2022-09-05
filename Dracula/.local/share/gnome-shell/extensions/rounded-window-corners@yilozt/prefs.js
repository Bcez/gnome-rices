const Gtk                      = imports.gi.Gtk
const Gdk                      = imports.gi.Gdk
const Notify                   = imports.gi.Notify
const { getCurrentExtension }  = imports.misc.extensionUtils




function load_css () {
    const display = Gdk.Display.get_default ()
    if (display) {
        const css = new Gtk.CssProvider ()
        const path = `${getCurrentExtension ().path}/stylesheet-prefs.css`
        css.load_from_path (path)
        Gtk.StyleContext.add_provider_for_display (display, css, 0)
    }
}

function init () {
    Notify.init ('yi.extensions.rounded-window-corners.prefs')
}

// Load preferences Pages for Gnome 40 / Gnome 41
function buildPrefsWidget () {
    const scrolled_win = new Gtk.ScrolledWindow ()
    const stack = new Gtk.Stack ({ css_classes: ['page'] })
    const swither = new Gtk.StackSwitcher ({ stack })

    scrolled_win.set_child (stack)

    // Add StackSwitcher into HeaderBar
    scrolled_win.connect ('realize', () => {
        const win = scrolled_win.root
        win.width_request = 550
        const titlebar = win.get_titlebar ()
        titlebar?.set_title_widget (swither)

        win.connect ('close-request', () => {
            Notify.uninit ()
        })
    })

    // Load pages
    import ('./preferences/index.js')
        .then ((index) => {
            for (const page of index.pages ()) {
                stack.add_titled (page.widget, page.title, page.title)
            }
        })
        .catch ((e) => logError (e))

    // Load css
    load_css ()

    return scrolled_win
}

// Load ui for Gnome 42+
function fillPreferencesWindow (window) {
    const Adw = imports.gi.Adw

    const tmp = new Adw.PreferencesPage ()
    window.add (tmp)

    import ('./preferences/index.js')
        .then ((index) => {
            window.remove (tmp)
            for (const page of index.pages ()) {
                const pref_page = new Adw.PreferencesPage ({
                    title: page.title,
                    icon_name: page.icon_name,
                })
                const group = new Adw.PreferencesGroup ()
                pref_page.add (group)
                group.add (page.widget)
                window.add (pref_page)
            }
        })
        .catch ((err) => logError (err))

    window.connect ('close-request', () => {
        Notify.uninit ()
    })

    load_css ()
}
