// imports.gi
const Meta                 = imports.gi.Meta

// gnome modules
const { openPrefs }        = imports.misc.extensionUtils

// local modules
import { load }            from './io.js'
import { _log, _logError } from './log.js'
import constants           from './constants.js'

// types


// --------------------------------------------------------------- [end imports]

export const computeWindowContentsOffset = (meta_window) => {
    const bufferRect = meta_window.get_buffer_rect ()
    const frameRect = meta_window.get_frame_rect ()
    return [
        frameRect.x - bufferRect.x,
        frameRect.y - bufferRect.y,
        frameRect.width - bufferRect.width,
        frameRect.height - bufferRect.height,
    ]
}

export var AppType
;(function (AppType) {
    AppType[(AppType['LibHandy'] = 0)] = 'LibHandy'
    AppType[(AppType['LibAdwaita'] = 1)] = 'LibAdwaita'
    AppType[(AppType['Other'] = 2)] = 'Other'
}) (AppType || (AppType = {}))

/**
 * Query application type for a Meta.Window, used to skip add rounded
 * corners effect to some window.
 * @returns Application Type: LibHandy | LibAdwaita | Other
 */
export const getAppType = (meta_window) => {
    try {
        // May cause Permission error
        const contents = load (`/proc/${meta_window.get_pid ()}/maps`)
        if (contents.match (/libhandy-1.so/)) {
            return AppType.LibHandy
        } else if (contents.match (/libadwaita-1.so/)) {
            return AppType.LibAdwaita
        } else {
            return AppType.Other
        }
    } catch (e) {
        _logError (e)
        return AppType.Other
    }
}

/**
 * Get scale factor of a Meta.window, if win is undefined, return
 * scale factor of current monitor
 */
export const WindowScaleFactor = (win) => {
    const monitor = win
        ? win.get_monitor ()
        : global.display.get_current_monitor ()
    return global.display.get_monitor_scale (monitor)
}

/**
 * Add Item into background menu, now we can open preferences page by right
 * click in background
 * @param menu - BackgroundMenu to add
 */
export const AddBackgroundMenuItem = (menu) => {
    for (const item of menu._getMenuItems ()) {
        if (item.label?.text === constants.ITEM_LABEL) {
            return
        }
    }

    menu.addAction (constants.ITEM_LABEL, () => {
        try {
            openPrefs ()
        } catch (err) {
            openPrefs ()
        }
    })
}

/** Find all Background menu, then add a item for open preferences into menu */
export const SetupBackgroundMenu = () => {
    for (const _bg of global.window_group.first_child.get_children ()) {
        const menu = _bg._backgroundMenu
        AddBackgroundMenuItem (menu)
    }
}

export const RestoreBackgroundMenu = () => {
    const remove_menu_item = (menu) => {
        const items = menu._getMenuItems ()

        for (const i of items) {
            if (i?.label?.text === constants.ITEM_LABEL) {
                i.destroy ()
                break
            }
        }
    }

    for (const _bg of global.window_group.first_child.get_children ()) {
        const menu = _bg._backgroundMenu
        remove_menu_item (menu)
        _log ('Added Item of ' + menu + 'Removed')
    }
}

/** When surface actor of Meta.WindowActor is ready, call the ready callback  */
export const WhenSurfaceActorIsReady = (connections, actor, ready) => {
    const win = actor.meta_window
    if (win.get_client_type () === Meta.WindowClientType.X11) {
        // Add rounded corners to surface actor for X11 client
        if (actor.first_child) {
            ready ()
        } else {
            // Surface Actor may not ready in some time
            connections.connect (actor, 'notify::first-child', () => {
                connections.disconnect (actor, 'notify::first-child')
                // now it's ready
                ready ()
            })
        }
    } else {
        // Add rounded corners to WindowActor for Wayland client
        ready ()
    }
}

/** Choice Rounded Corners Settings for window  */
export const ChoiceRoundedCornersCfg = (global_cfg, custom_cfg_list, win) => {
    const k = win.get_wm_class_instance ()
    if (k == null || !custom_cfg_list[k] || !custom_cfg_list[k].enabled) {
        return global_cfg
    }

    const custom_cfg = custom_cfg_list[k]
    // Need to skip border radius item from custom settings
    custom_cfg.border_radius = global_cfg.border_radius
    return custom_cfg
}

/**
 * Decide whether windows should have rounded corners when it has been
 * maximized & fullscreen according to RoundedCornersCfg
 */
export function ShouldHasRoundedCorners (win, cfg) {
    let should_has_rounded_corners = false

    const maximized = win.maximized_horizontally || win.maximized_vertically
    const fullscreen = win.fullscreen

    should_has_rounded_corners =
        (!maximized && !fullscreen) ||
        (maximized && cfg.keep_rounded_corners.maximized) ||
        (fullscreen && cfg.keep_rounded_corners.fullscreen)

    return should_has_rounded_corners
}
