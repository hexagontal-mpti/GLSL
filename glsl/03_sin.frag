#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

void main(){
    vec2 step_of_axis = gl_FragCoord.xy/u_resolution;

    float seed_sin_y 	 = 0.00001;
    
    float seed_down_part = 1.1448;
    
    float y	   = sin(step_of_axis.x / seed_sin_y);
	
    float plot = smoothstep( -y, y, step_of_axis.y ) 
    			 -
                 smoothstep(  y, y, step_of_axis.y );
    
    vec3 color = plot
        * vec3(0.0,1.0,0.0)
        * seed_down_part;

    gl_FragColor = vec4(color, 0.5);
}