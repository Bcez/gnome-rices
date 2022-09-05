var _a
// imports.gi
const { PipelineFilter }           = imports.gi.Cogl
const { registerClass }            = imports.gi.GObject
const { GLSLEffect, SnippetHook }  = imports.gi.Shell

// local modules
import { loadShader }              from '../utils/io.js'

// -------------------------------------------------------------- [end imports]

// Load fragment shader of rounded corners effect.
const { declarations, code } = loadShader (
    import.meta.url,
    './shader/rounded_corners.frag'
)

/** Location of uniform variants of rounded corners effect */
class Uniforms {
    constructor () {
        this.bounds = 0
        this.clip_radius = 0
        this.smoothing = 0
        this.inner_bounds = 0
        this.inner_clip_radius = 0
        this.pixel_step = 0
        this.skip = 0
        this.border_width = 0
        this.border_color = 0
    }
}

export default registerClass (
    {},
    ((_a = class Effect extends GLSLEffect {
        constructor () {
            super (...arguments)

            /**
             * Wether skip rounded corners effect, its useful to disable rounded
             * corners when window is maximized
             */
            this._skip = false
        }

        /**
         * Collect location of uniform variants, only used when added shader
         * snippet to effect.
         */
        _init_uniforms () {
            Effect.uniforms = {
                bounds: 0,
                clip_radius: 0,
                smoothing: 0,
                inner_bounds: 0,
                inner_clip_radius: 0,
                pixel_step: 0,
                skip: 0,
                border_width: 0,
                border_color: 0,
            }
            Object.keys (Effect.uniforms).forEach ((k) => {
                if (!Effect.uniforms) return
                Effect.uniforms[k] = this.get_uniform_location (k)
            })
        }

        vfunc_build_pipeline () {
            const type = SnippetHook.FRAGMENT
            this.add_glsl_snippet (type, declarations, code, false)
            this._init_uniforms ()
        }

        vfunc_paint_target (node, ctx) {
            this.get_pipeline ()?.set_layer_filters (
                0,
                PipelineFilter.LINEAR_MIPMAP_LINEAR,
                PipelineFilter.NEAREST
            )

            // Reset to default blend mode, so that we can handle opacity
            // of window.
            //
            // GLSLEffect has change this settings, when change opacity of
            // clutter actor which apply GLSLEffect, it will make it looks like
            // more dimmed:
            //
            // https://gitlab.gnome.org/GNOME/gnome-shell/-/blob/main/src/
            // shell-glsl-effect.c#L122
            //
            // Now changed it to default settings:
            //
            // https://developer-old.gnome.org/cogl-2.0-experimental/1.22/
            // cogl-2.0-experimental-Pipeline.html#cogl-pipeline-set-blend

            this.get_pipeline ()?.set_blend (
                'RGBA = ADD(SRC_COLOR, DST_COLOR*(1-SRC_COLOR[A]))'
            )
            super.vfunc_paint_target (node, ctx)
        }

        /**
         * Used to update uniform variants of shader
         * @param corners_cfg   - Rounded corners settings of window
         * @param bounds_cfg - Outer bounds of rounded corners
         */
        update_uniforms (scale_factor, corners_cfg, outer_bounds, border) {
            const actor = this.actor

            const border_width = border.width * scale_factor
            const border_color = border.color

            const radius = corners_cfg.border_radius * scale_factor
            const { padding, smoothing } = corners_cfg

            const bounds = [
                outer_bounds.x1 + padding.left * scale_factor,
                outer_bounds.y1 + padding.top * scale_factor,
                outer_bounds.x2 - padding.right * scale_factor,
                outer_bounds.y2 - padding.bottom * scale_factor,
            ]

            const inner_bounds = [
                bounds[0] + border_width,
                bounds[1] + border_width,
                bounds[2] - border_width,
                bounds[3] - border_width,
            ]

            let inner_radius = radius - border_width
            if (inner_radius < 0.001) {
                inner_radius = 0.0
            }

            const pixel_step = [1 / actor.get_width (), 1 / actor.get_height ()]
            const _skip = this._skip ? 1 : 0

            const location = Effect.uniforms
            this.set_uniform_float (location.bounds, 4, bounds)
            this.set_uniform_float (location.inner_bounds, 4, inner_bounds)
            this.set_uniform_float (location.pixel_step, 2, pixel_step)
            this.set_uniform_float (location.border_width, 1, [border_width])
            this.set_uniform_float (location.smoothing, 1, [smoothing])
            this.set_uniform_float (location.clip_radius, 1, [radius])
            this.set_uniform_float (location.border_color, 4, border_color)
            this.set_uniform_float (location.inner_clip_radius, 1, [
                inner_radius,
            ])
            this.set_uniform_float (location.skip, 1, [_skip])
            this.queue_repaint ()
        }

        set skip (skip) {
            this._skip = skip
            const location = Effect.uniforms.skip
            this.set_uniform_float (location, 1, [this._skip ? 1.0 : 0.0])
            this.queue_repaint ()
        }
    }),
    /**
     * Location of uniforms variants in shader, Cache those location
     * when shader has been setup in `vfunc_build_pipeline()`, sot that
     * avoid to yse `this.get_uniform_location()` to query too much times.
     */
    (_a.uniforms = new Uniforms ()),
    _a)
)
