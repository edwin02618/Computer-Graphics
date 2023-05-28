const vertexShader = `
precision highp float;
precision highp int;




varying vec3 vPosition;
varying vec2 vUv;


void main() {

    // To pass variables to the fragment shader, you assign them here in the
    // main function. Traditionally you name the varying with vAttributeName

    vUv = uv;
    vPosition = position;

    // This sets the position of the vertex in 3d space. The correct math is
    // provided below to take into account camera and object data.
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`
export default vertexShader