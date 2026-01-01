#ifdef GL_ES
precision mediump float;
#endif

uniform vec3 u_mouse;
uniform vec2 u_resolution;
uniform vec3 u_time;

vec3 hsb2rgb(vec3 c){
    vec3 rgb = clamp(
       		   abs(
          	   mod(
               c.r 
               *
               6. 
               + 
               vec3(0.,
                    4., 
                    2.),
               6.)
               -3.)
               -1.,
               0.,
               1.); // i need write function for clamp
    
    rgb = rgb
          * 
          rgb 
          *
          (3.
           -
           2.
           *
           rgb); // hmmm
    
    return c.b * mix(vec3(0.),
                     rgb     , // change color index
                     c.g     );   
}

void main(){
    vec2 step_of_axis = gl_FragCoord.xy / u_resolution;

    vec3 color = vec3(step_of_axis.x, 
                              1., // z = b
                              step_of_axis.y);

    gl_FragColor = vec4(hsb2rgb(color), // color is amazing
                        1.    );  
}