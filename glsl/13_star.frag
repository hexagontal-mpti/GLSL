#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){
    vec2 pos = vec2(.5) - gl_FragCoord.xy/u_resolution.xy;
    float a = atan(pos.x, pos.y);
    float f = abs(cos(a * 10.) * sin(a * 10.)) + abs(sin(u_time)) - .5; // smoothstep(-1., 1., cos(a * abs(tan(u_time)))) / 4. + .5
    float color = 1. - smoothstep(f, f, length(pos) * 4.);
    gl_FragColor = vec4(color);
}