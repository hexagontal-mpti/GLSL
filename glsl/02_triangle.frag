#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float plot(vec2 a) {    
    return smoothstep(0.01, 0.0, a.x - a.y);
}

void main() {
	vec2 step_of_axis = gl_FragCoord.xy/u_resolution;
    
	gl_FragColor	  = vec4(0.0,
                        plot(step_of_axis), 
                    	0.0, 
                    	0.5);
}