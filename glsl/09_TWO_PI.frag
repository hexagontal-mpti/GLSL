#ifdef GL_ES
precision mediump float;
#endif

#define TWO_PI 6.28318530718

uniform vec2 u_mouse;
uniform float u_time;
uniform vec2 u_resolution;

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
               1.); // btw i need write function for clamp
    rgb = rgb
          * 
          rgb 
          *
          (3.
           -
           2.
           *
           rgb); // hmmm
    return c.b * mix(vec3(1.),
                     rgb     , // change color index
                     c.g     );   
}

void main(){
    vec2 middle  = vec2(.5) - gl_FragCoord.xy / u_resolution;
    float angle  = atan(middle.y, middle.x) + u_time / .5;
    float radius = length(middle) * TWO_PI;
    vec3 color   = vec3(angle / TWO_PI + .5, radius, 1.);
    gl_FragColor = vec4(hsb2rgb(color), 1.);
}