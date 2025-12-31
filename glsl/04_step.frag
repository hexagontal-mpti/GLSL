#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main() {
    vec2 step_of_axis = gl_FragCoord.xy / u_resolution;
    float abc 	      = abs(sin(u_time));
    gl_FragColor      = vec4(.0,
                        step(abc, step_of_axis.y),
                        .0,
                        .5);
}