#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;

mat2 rotate2d(float _angle){
    return mat2(cos(_angle), -sin(_angle),
                sin(_angle),  cos(_angle));
}

float box(in vec2 _st, in vec2 _size){
    _size = vec2(.5) - _size; // lol
    vec2 uv = smoothstep(_size,
                         _size + vec2(.001),
                         _st);
    uv     *= smoothstep(_size,
                         _size + vec2(.001),
                         vec2(1.) - _st);
    return uv.x * uv.y; // change this for different result
}

float cross(in vec2 _st, float _size){
    return  box(_st, vec2(_size     , _size / 4.))
        	+
            box(_st, vec2(_size / 4., _size     ));
}

void main(){
    vec2 st = gl_FragCoord.xy / u_resolution;
    st -= vec2(.5);
    st *= rotate2d(sin(u_time) * 2.);
    st += vec2(.5);
    vec3 color   = vec3(st.x, st.y, .5); // change x or y value
    color += vec3(cross(st, 0.1));
    gl_FragColor = vec4(color,1.0);
}