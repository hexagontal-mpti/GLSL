#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec4 u_mouse;
uniform float u_time;

void main() {
	vec2 step_of_axis 	= gl_FragCoord.xy / u_resolution;
    
	gl_FragColor 		= vec4(0.5, 
                        step_of_axis.xy, 
                        1.0);
}