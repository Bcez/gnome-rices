uniform int height;
uniform int width;
uniform int mouseX;
uniform int mouseY;

uniform float slider;

uniform sampler2D tex;

void main()
{
  float value = slider;
  if(value>0.7)
    value = 0.7;
  vec3 rgb = texture2D( tex, cogl_tex_coord_in[0].xy).rgb;
  cogl_color_out = vec4(rgb.x-mod(rgb.x, value), rgb.y-mod(rgb.y, value), rgb.z-mod(rgb.z, value), 1.0);
}
