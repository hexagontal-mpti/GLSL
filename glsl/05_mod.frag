#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float plot(float y, float a){
  return  smoothstep( a - .01, a, y) 
      	  -
          smoothstep( a, a + .01, y);
}

void main() {
    vec2 step_of_axis = gl_FragCoord.xy / u_resolution;
    float y 		  = mod(step_of_axis.x, 1. / 4.);
    gl_FragColor 	  = vec4(plot(step_of_axis.y, 1. - y) * vec3(0., 1., 0.),
                        .5);
}