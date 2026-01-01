#ifdef GL_ES
precision mediump float;
#endif

uniform vec3 u_time;
uniform vec2 u_resolution; // lol
uniform vec3 u_mouse;

vec3 m (vec3 color, vec3 b, float A){
return mix(color,
           b, // i need change this fuction but i have problems 
           A);
}

float plot (float y, float a){
return  smoothstep( a - .001,
                    a       ,
                    y         )
    	- // change operation for different result
        smoothstep( a       , 
                    a + .001, 
                    y         );
}

vec3 base = vec3(0.,
                 1.,
                 0.); // my like color is green

void main() {
    vec2 step_of_axis  = gl_FragCoord.xy / u_resolution;
    
    vec3 plot_for_b    = vec3(step_of_axis.y); // just because i like y bigger than x axis

    vec3 color         = mix(base.rrg,
                             base.ggr,
                             plot_for_b); // xyz = rgb 
    
	vec3 res		   = m(color,
                           base.rbg,
                           plot(1. - step_of_axis.x,
                           plot_for_b.b))
        				   + // hmmm, bruh, wtf
        				 m(color,
                           base.rbg, 
                           plot(step_of_axis.x, 
                           plot_for_b.b));

    gl_FragColor 	   = vec4(res * .5,
                              1.     );
}