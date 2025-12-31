#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec4 u_mouse;

float abc 	= abs(sin(u_time));

float z		= 0.0;

void main(){ 
	gl_FragColor = vec4(z, abc, z, 1.0);
}