#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;

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
    vec2 step_of_axis = gl_FragCoord.xy / u_resolution;
    
    vec2 translate = vec2(-sin(u_time), sin(u_time)) + vec2(sin(u_time), sin(u_time)) ;
    
    step_of_axis += translate / 5.;

    vec3 color = vec3(cross(step_of_axis, .05));

    gl_FragColor = vec4(color, 1.);
}