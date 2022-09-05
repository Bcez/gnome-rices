// imports.gi
const { Point }                        = imports.gi.Graphene
const { BindConstraint, Clone }        = imports.gi.Clutter
const { Source, timeout_add_seconds }  = imports.gi.GLib
const { MonitorManager }               = imports.gi.Meta

// gnome-shell modules
const { WindowPreview }                = imports.ui.windowPreview
const { WorkspaceGroup }               = imports.ui.workspaceAnimation
const { WindowManager }                = imports.ui.windowManager
const BackgroundMenu                   = imports.ui.backgroundMenu
const { sessionMode }                  = imports.ui.main

// local modules
import constants                       from './utils/constants.js'
import { RoundedCornersManager }       from './manager/rounded-corners-manager.js'
import { stackMsg, _log as log }       from './utils/log.js'
import { AddBackgroundMenuItem }       from './utils/ui.js'
import { RestoreBackgroundMenu }       from './utils/ui.js'
import { SetupBackgroundMenu }         from './utils/ui.js'
import { WindowScaleFactor }           from './utils/ui.js'
import { ChoiceRoundedCornersCfg }     from './utils/ui.js'
import { ShouldHasRoundedCorners }     from './utils/ui.js'
import Connections                     from './utils/connections.js'
import settings                        from './utils/settings.js'
import Services                        from './dbus/services.js'


// --------------------------------------------------------------- [end imports]
export class Extension {
    constructor () {
        this._services = null
        this._rounded_corners_manager = null

        this._timeout_handler = 0
        // Show loaded message in debug mode
        log (constants.LOADED_MSG)
    }

    enable () {
        // Restore original methods, those methods will be restore when
        // extensions is disabled
        this._orig_add_window = WindowPreview.prototype._addWindow
        this._orig_create_windows = WorkspaceGroup.prototype._createWindows
        this._orig_size_changed = WindowManager.prototype._sizeChangeWindowDone
        this._add_background_menu = BackgroundMenu.addBackgroundMenu

        this._services = new Services ()
        this._rounded_corners_manager = new RoundedCornersManager ()

        this._services.export ()
        this._enable_effect_managers ()

        // Have to toggle fullscreen for all windows when changed scale factor
        // of windows because rounded-corners-manager may got incorrect frame
        // rect & buffer rect to calculate position of shadow & bound of rounded
        // corners.
        // FIXME: This is an ugly way but works. Should found a better way to
        // solve this problem.

        const monitor_manager = MonitorManager.get ()

        Connections.get ().connect (monitor_manager, 'monitors-changed', () => {
            if (sessionMode.isLocked || sessionMode.isGreeter) {
                return
            }
            for (const win of this._rounded_corners_manager?.windows () ?? []) {
                win.__extensions_rounded_window_fs = 1
                win.make_fullscreen ()
            }

            // waiting 3 seconds then restore marked windows.
            this._timeout_handler = timeout_add_seconds (0, 3, () => {
                for (const _win of this._rounded_corners_manager?.windows () ??
                    []) {
                    const win = _win
                    if (win && win.__extensions_rounded_window_fs == 1) {
                        win.unmake_fullscreen ()
                        delete win.__extensions_rounded_window_fs
                    }
                }
                return false
            })
        })

        // Restore window that have __extensions_rounded_window_fs props when
        // unlocked
        for (const win_actor of global.get_window_actors ()) {
            const win = win_actor.meta_window
            if (win.__extensions_rounded_window_fs === 1) {
                win.unmake_fullscreen ()
                delete win.__extensions_rounded_window_fs
            }
        }

        const self = this

        // When there is new window added into overview, this function will be
        // called. We need add our shadow actor and blur actor of rounded
        // corners window into overview.
        //
        WindowPreview.prototype._addWindow = function (window) {
            self._orig_add_window.apply (this, [window])

            // Make sure patched method only be called in _init() of
            // WindowPreview
            // https://gitlab.gnome.org/GNOME/gnome-shell/-/blob/main/js
            // /ui/windowPreview.js#L42

            const stack = stackMsg ()
            if (
                stack === undefined ||
                stack.indexOf ('_updateAttachedDialogs') !== -1 ||
                stack.indexOf ('addDialog') !== -1
            ) {
                return
            }

            log (`Add shadow for ${window.title} in overview`)

            const window_container = this.window_container

            let cfg = null
            let has_rounded_corners = false

            const shadow = self._rounded_corners_manager?.query_shadow (window)

            if (shadow) {
                cfg = ChoiceRoundedCornersCfg (
                    settings ().global_rounded_corner_settings,
                    settings ().custom_rounded_corner_settings,
                    window
                )
                has_rounded_corners = ShouldHasRoundedCorners (window, cfg)
            }
            if (shadow && has_rounded_corners) {
                const source = shadow
                const pivot_point = new Point ({ x: 0.5, y: 0.5 })
                const shadow_clone = new Clone ({ source, pivot_point })

                for (const prop of ['scale-x', 'scale-y']) {
                    window_container.bind_property (prop, shadow_clone, prop, 0)
                }

                for (let i = 0; i < 4; i++) {
                    shadow_clone.add_constraint (
                        new BindConstraint ({
                            coordinate: i,
                            source: window_container,
                        })
                    )
                }

                window_container.connect ('notify::width', () => {
                    const paddings =
                        (window_container.width /
                            window.get_frame_rect ().width) *
                        (constants.SHADOW_PADDING * WindowScaleFactor (window))

                    shadow_clone.get_constraints ().forEach ((_c, i) => {
                        const c = _c
                        c.offset = i < 2 ? -paddings : paddings * 2
                    })
                })

                this.insert_child_below (shadow_clone, window_container)
            }
        }

        // Just Like the monkey patch when enter overview, need to add shadow
        // actor and blur actor into WorkspaceGroup to see them when switching
        // workspace
        WorkspaceGroup.prototype._createWindows = function () {
            self._orig_create_windows.apply (this)

            this._windowRecords.forEach (({ windowActor: actor, clone }) => {
                const win = actor.meta_window
                const frame_rect = win.get_frame_rect ()
                const cfg = ChoiceRoundedCornersCfg (
                    settings ().global_rounded_corner_settings,
                    settings ().custom_rounded_corner_settings,
                    win
                )
                const maximized =
                    win.maximized_horizontally ||
                    win.maximized_vertically ||
                    win.fullscreen
                const has_rounded_corners =
                    cfg.keep_rounded_corners || !maximized

                const shadow = self._rounded_corners_manager?.query_shadow (win)
                if (shadow && has_rounded_corners) {
                    // Only create shadow actor when window should have rounded
                    // corners when switching workspace

                    // Copy shadow actor to workspace group, so that to see
                    // shadow when switching workspace
                    const shadow_clone = new Clone ({ source: shadow })
                    const paddings =
                        constants.SHADOW_PADDING * WindowScaleFactor (win)

                    shadow_clone.width = frame_rect.width + paddings * 2
                    shadow_clone.height = frame_rect.height + paddings * 2
                    shadow_clone.x = clone.x + frame_rect.x - actor.x - paddings
                    shadow_clone.y = clone.y + frame_rect.y - actor.y - paddings

                    clone.connect (
                        'notify::translation-z',
                        () =>
                            (shadow_clone.translation_z =
                                clone.translation_z + 0.006)
                    )

                    this.insert_child_below (shadow_clone, clone)
                    this.set_child_below_sibling (shadow_clone, clone)
                }
            })
        }

        // Window Size Changed
        WindowManager.prototype._sizeChangeWindowDone = function (
            shell_wm,
            actor
        ) {
            self._orig_size_changed.apply (this, [shell_wm, actor])
            // Update shadow actor
            if (!self._rounded_corners_manager) {
                return
            }
            self._rounded_corners_manager.on_size_changed (actor)
            self._rounded_corners_manager._on_focus_changed (actor.meta_window)
        }

        SetupBackgroundMenu ()
        BackgroundMenu.addBackgroundMenu = (actor, layout) => {
            this._add_background_menu (actor, layout)
            AddBackgroundMenuItem (actor._backgroundMenu)
        }

        // Gnome-shell will not disable extensions when logout/shutdown/restart
        // system, it means that the signal handlers will not be cleaned when
        // gnome-shell is closing.
        //
        // Now clear all resources manually before gnome-shell closes
        Connections.get ().connect (global.display, 'closing', () => {
            log ('Clear all resources because gnome-shell is shutdown')
            this.disable ()
        })

        log ('Enabled')
    }

    disable () {
        // Restore patched methods
        WindowPreview.prototype._addWindow = this._orig_add_window
        WorkspaceGroup.prototype._createWindows = this._orig_create_windows
        WindowManager.prototype._sizeChangeWindowDone = this._orig_size_changed
        BackgroundMenu.addBackgroundMenu = this._add_background_menu

        // Remove main loop sources
        if (this._timeout_handler != 0) {
            Source.remove (this._timeout_handler)
            this._timeout_handler = 0
        }

        // Remove the item to open preferences page in background menu
        RestoreBackgroundMenu ()

        this._services?.unexport ()
        this._disable_effect_managers ()

        // Disconnect all signals in global Connections.get()
        Connections.get ().disconnect_all ()
        Connections.del ()

        // Set all props to null
        this._rounded_corners_manager = null
        this._services = null

        log ('Disabled')
    }

    _enable_effect_managers () {
        this._rounded_corners_manager?.enable ()
    }

    _disable_effect_managers () {
        this._rounded_corners_manager?.disable ()
    }
}
