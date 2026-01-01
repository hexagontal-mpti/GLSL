#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;

vec3 color = vec3(0., 1., 0.);

void main() {
    float abc    = abs(sin(u_time));

    vec3 color   = mix(color.yyx, color.xxy, abc);

    gl_FragColor = vec4(color, 1.0);
}