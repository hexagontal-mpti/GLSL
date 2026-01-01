#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){
  gl_FragColor = vec4(
      vec3(fract(length(tan(
                      gl_FragCoord.xy 
                      / 
                      u_resolution) 
                  / 
                  abs(sin(
                          u_time
                      )) 
                  - 
                  .5)
              * 
              25.)
          ),
      1.); // step(.3,d) or step(.3, d) * step(d, .4)
}