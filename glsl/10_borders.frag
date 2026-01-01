#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

void main(){
    vec2 step_of_axis = gl_FragCoord.xy / u_resolution;
    vec2 border1 = step(vec2(.1), step_of_axis);
    vec2 border2 = step(vec2(.1), 1. - step_of_axis);
    vec3 border1_xy = vec3(border1.x * border1.y);
    vec3 border2_xy = vec3(border2.x * border2.y);
    vec3 color = border1_xy * border2_xy;
    gl_FragColor = vec4(color, 1.);
}