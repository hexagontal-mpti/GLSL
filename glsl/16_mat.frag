#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

mat3 yuv2rgb = mat3(1., 0., 1., 1., 0., -.5, 1., 2., 0.);

void main(){
    vec2 st = 2. * (gl_FragCoord.xy / u_resolution  - .5);
    vec3 color = yuv2rgb * vec3(.5, st.x, st.y);
    gl_FragColor = vec4(color, 1.);
}