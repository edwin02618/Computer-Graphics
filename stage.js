import * as THREE from 'three';
import {OrbitControls} from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js';
import backgroundfShader from './shader/backgroundfshader.glsl.js';
import backgroundvShader from './shader/backgroundvshader.glsl.js';
import {PointerLockControls} from './examples/jsm/controls/PointerLockControls.js';
import { wallGroup } from './cage and lighting.js';

//create the scene
//var scene = new THREE.Scene( );

//create the webgl renderer
export function initializeStage(scene) {
var renderer = new THREE.WebGLRenderer( );

renderer.setSize(window.innerWidth,window.innerHeight);

//add the renderer to the current document
document.body.appendChild(renderer.domElement );


var ambientlight = new THREE.AmbientLight(new THREE.Color(1,1,1),1);
//scene.add(ambientlight);




const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight,
										 0.1, 1000 );
var Pos = new THREE.Vector3(0,0,0);
camera.position.set(Pos.x,Pos.y,Pos.z);
var Dir = new THREE.Vector3(0,0,1);
camera.lookAt(Dir.x,Dir.y,Dir.z);
scene.add(camera);
camera.position.z = -45; 
camera.position.y = 1;
camera.position.x = -1;

var controls = new PointerLockControls( camera, renderer.domElement );

let jumpraycaster;

let moveForward = false;
let moveBackward = false;
let moveLeft = false;
let moveRight = false;
let canJump = true;
const jumpSpeed = 40;



let prevTime = performance.now();
const velocity = new THREE.Vector3();
const direction = new THREE.Vector3();



  var uniforms = {
    time: {value:0.0},
    speed: {value : 4},
    fadeAway:{value: 0.7},
    resolution:{value: new THREE.Vector2(1, 1)},
    uniformity:{value: 10},
    mouse: {value: new THREE.Vector2(0.5,0.5)},
    color:{value: new THREE.Color(0.8745098039215686, 0.5725490196078431, 0.058823529411764705)},
   
  }
  
  const backshaderMaterial = new THREE.ShaderMaterial({
    uniforms :uniforms,
    vertexShader :backgroundvShader,
    fragmentShader: backgroundfShader,
    side: THREE.DoubleSide
  })

  const objects = [];
  scene.add( controls.getObject() );

const loader = new THREE.TextureLoader();

const backgroundtexture = loader.load('img/background.jpg');

backgroundtexture.wrapS = THREE.RepeatWrapping;
backgroundtexture.wrapT = THREE.RepeatWrapping;
backgroundtexture.repeat = new THREE.Vector2(60,1)
const backgroundGeometry = new THREE.SphereGeometry( 100, 32,32);
backgroundGeometry.thetaLength = 1
const backgroundmaterial = new THREE.MeshBasicMaterial( {map: backgroundtexture } );
const backgroundsphere = new THREE.Mesh( backgroundGeometry, backshaderMaterial );
backgroundsphere.material.side = THREE.BackSide;
backgroundsphere.rotation.y =  - Math.PI / 2 +0.05;
backgroundsphere.rotation.x = -0.2
backgroundsphere.position.z = -30
scene.add( backgroundsphere );

const floorTexture = loader.load( 'img/floor.png' );

floorTexture.wrapS = THREE.RepeatWrapping;
floorTexture.wrapT = THREE.RepeatWrapping;
floorTexture.repeat = new THREE.Vector2(5,5)
const floormaterial = new THREE.MeshPhongMaterial({map: floorTexture});
floormaterial.color = new THREE.Color('#2d2926');

const floorgeometry = new THREE.PlaneGeometry( 50, 100, 10, 10);
const floormesh = new THREE.Mesh( floorgeometry, floormaterial );
floorgeometry.rotateX( - Math.PI / 2 );
floormesh.position.y = -0.5
scene.add( floormesh );

objects.push(floormesh);


const wallTexture = loader.load('img/wall.jpg')
wallTexture.wrapS = THREE.RepeatWrapping;
wallTexture.wrapT = THREE.RepeatWrapping;
wallTexture.repeat = new THREE.Vector2(7,3)
// Front Wall
const wallMaterial = new THREE.MeshLambertMaterial({ map: wallTexture })
const frontWall1 = new THREE.Mesh(new THREE.BoxGeometry(25, 10, 1), wallMaterial );
 // Lambert material is for non-shiny surfaces 

frontWall1.position.z = -50; 
frontWall1.position.y = 4.5;
frontWall1.position.x = 1.4;

// right Wall
const rightWall1 = new THREE.Mesh(new THREE.BoxGeometry(40, 17, 1), wallMaterial );

rightWall1.rotation.y = Math.PI / 2 + 0.3; 
rightWall1.position.x = -4.5;
rightWall1.position.y = 4.5;
rightWall1.position.z = -40;

// left Wall
const leftWall1 = new THREE.Mesh(new THREE.BoxGeometry(18, 17, 1), wallMaterial );

leftWall1.rotation.y = Math.PI / 2+ 0.3; 
leftWall1.position.x = 4.5; 
leftWall1.position.y = 4.5;
leftWall1.position.z = -42;

const rightwall2 = new THREE.Mesh(new THREE.BoxGeometry(16, 17, 1), wallMaterial );
rightwall2.rotation.y = +0.2; 
rightwall2.position.z = -23;
rightwall2.position.y = 4.5;
rightwall2.position.x = 8.5;

const leftWall2 = new THREE.Mesh(new THREE.BoxGeometry(20, 17, 1), wallMaterial );

leftWall2.rotation.y = +0.3; 
leftWall2.position.x = 16.1; 
leftWall2.position.y = 4.5;
leftWall2.position.z = -39;

const leftWall3 = new THREE.Mesh(new THREE.BoxGeometry(38, 17, 1), wallMaterial );
leftWall3.rotation.y = Math.PI / 2; 
leftWall3.position.x = 25.1;
leftWall3.position.z = -22;
leftWall3.position.y = 4.5;


const rightWall3 = new THREE.Mesh(new THREE.BoxGeometry(17, 17, 1), wallMaterial );

rightWall3.rotation.y = Math.PI / 2
rightWall3.position.x = 17.32; 
rightWall3.position.y = 4.5;
rightWall3.position.z = -19.7;

const leftWall4 = new THREE.Mesh(new THREE.BoxGeometry(16, 17, 1), wallMaterial );
leftWall4.rotation.y = 0.2
leftWall4.position.x = 17.9;
leftWall4.position.z = -1.5;
leftWall4.position.y = 4.5;

const rightWall4 = new THREE.Mesh(new THREE.BoxGeometry(18, 17, 1), wallMaterial );
rightWall4.rotation.y = 0.2
rightWall4.position.x = 9.4;
rightWall4.position.z = -10.8;
rightWall4.position.y = 4.5;

const rightWall5 = new THREE.Mesh(new THREE.BoxGeometry(35, 17, 1), wallMaterial );
rightWall5.rotation.y = Math.PI / 2 
rightWall5.position.x = 0;
rightWall5.position.z = +7;
rightWall5.position.y = 4.5;

const leftWall5 = new THREE.Mesh(new THREE.BoxGeometry(13.5, 17, 1), wallMaterial );
leftWall5.rotation.y = Math.PI / 2 
leftWall5.position.x = 12;
leftWall5.position.z = +17.8;
leftWall5.position.y = 4.5;

//let wallGroup = new THREE.Group(); // create a group to hold the walls
scene.add(wallGroup); // add the group to the scene, then any child added to the group will display to the scene too

wallGroup.add(frontWall1, rightWall1, //leftWall1, 
			rightwall2,leftWall2, 
			leftWall3, //rightWall3,
			leftWall4, rightWall4,
			rightWall5,leftWall5 );

//create collidableList and assign all the children in wall group
const collidableMeshList = wallGroup.children;


const clock = new THREE.Clock();


jumpraycaster = new THREE.Raycaster( new THREE.Vector3(), new THREE.Vector3( 0, - 1, 0 ), 0, 10 ) 
const movementRaycaster = new THREE.Raycaster();
const lateralRaycaster = new THREE.Raycaster();
const movementDirection = new THREE.Vector3();
const lateralDirection = new THREE.Vector3();
const collisionThreshold = 1;

update();

function update(){
  requestAnimationFrame( update );

  const time = performance.now();

  movementDirection.set(
    -Math.sin(camera.rotation.y),0,-Math.cos(camera.rotation.y)
  );
  movementRaycaster.set(camera.position, movementDirection);

  // Update the lateral raycaster
  lateralDirection.set(-Math.cos(camera.rotation.y),0, Math.sin(camera.rotation.y)
  );
  lateralRaycaster.set(camera.position, lateralDirection);

  // Check for collisions with collidableMeshList
  const movementIntersects = movementRaycaster.intersectObjects(collidableMeshList);
  const lateralIntersects = lateralRaycaster.intersectObjects(collidableMeshList);

  // Handle movement collisions
  if (movementIntersects.length > 0.5) {
    const intersectionPoint = movementIntersects[0].point;
    const distanceToIntersection = camera.position.distanceTo(intersectionPoint);
    if (distanceToIntersection < collisionThreshold) {
      camera.position.copy(intersectionPoint).sub(movementDirection.clone().normalize().multiplyScalar(collisionThreshold));
    }
  }
  
  // Handle lateral collisions
  if (lateralIntersects.length > 0.5) {
    const intersectionPoint = lateralIntersects[0].point;
    const distanceToIntersection = camera.position.distanceTo(intersectionPoint);
    if (distanceToIntersection < collisionThreshold) {
      camera.position.copy(intersectionPoint).sub(lateralDirection.clone().normalize().multiplyScalar(collisionThreshold));
    }
  }

  jumpraycaster.ray.origin.copy( controls.getObject().position );
  jumpraycaster.ray.origin.y = camera.position.y +5;

    const jumpintersections = jumpraycaster.intersectObjects( collidableMeshList,false);

    const onObject = jumpintersections.length > 0;

    const delta = ( time - prevTime ) / 1000;

    velocity.x -= velocity.x * 10.0 * delta;
    velocity.z -= velocity.z * 10.0 * delta;

    velocity.y -= 1 * 100.0 * delta; // 100.0 = mass

    direction.z = Number( moveForward ) - Number( moveBackward );
    direction.x = Number( moveRight ) - Number( moveLeft );
    direction.normalize(); // this ensures consistent movements in all directions

    if ( moveForward || moveBackward ) velocity.z -= direction.z * 100.0 * delta;
    if ( moveLeft || moveRight ) velocity.x -= direction.x * 100.0 * delta;

    if (onObject === true) {
      velocity.y = Math.max(0, velocity.y);
      canJump = true;
    }

    controls.moveRight( - velocity.x * delta );
    controls.moveForward( - velocity.z * delta );

    controls.getObject().position.y += ( velocity.y * delta ); // new behavior

    if (controls.getObject().position.y < 3) {
      velocity.y = 0;
      controls.getObject().position.y = 3;
      canJump = true;
    }

  

  prevTime = time;

  renderer.render( scene, camera );

  uniforms.time.value = clock.getElapsedTime()
}

let previousMouseX = 0;

document.addEventListener('click', () => {
  controls.lock();
});

const handleMouseMove = (event) => {
  if (controls.isLocked) {
    const mouseDeltaX = event.clientX - previousMouseX;
    controls.getObject().rotation.y -= mouseDeltaX * 0.002;
    previousMouseX = event.clientX;
  }
};

var MyResize = function ( )
{
  var width = window.innerWidth;
  var height = window.innerHeight;
  renderer.setSize(width,height);
  camera.aspect = width/height;

  camera.updateProjectionMatrix();

  renderer.render(scene,camera);
};

renderer.render(scene,camera);

window.addEventListener( 'resize', MyResize);



const onKeyDown = function ( event ) {
  if (event.code === 'Escape') {
    controls.unlock(); // Unlock the pointer lock controls
    document.removeEventListener('mousemove', handleMouseMove); // Remove the mousemove event listener
    return; // Exit the function to prevent camera movement
  }

  switch ( event.code ) {

    case 'ArrowUp':
    case 'KeyW':
      moveForward = true;
      break;

    case 'ArrowLeft':
    case 'KeyA':
      moveLeft = true;
      break;

    case 'ArrowDown':
    case 'KeyS':
      moveBackward = true;
      break;

    case 'ArrowRight':
    case 'KeyD':
      moveRight = true;
      break;

    case 'Space':
      if ( canJump === true ) velocity.y += jumpSpeed;
      canJump = false;
      break;

  }

};

const onKeyUp = function ( event ) {

  switch ( event.code ) {

    case 'ArrowUp':
    case 'KeyW':
      moveForward = false;
      break;

    case 'ArrowLeft':
    case 'KeyA':
      moveLeft = false;
      break;

    case 'ArrowDown':
    case 'KeyS':
      moveBackward = false;
      break;

    case 'ArrowRight':
    case 'KeyD':
      moveRight = false;
      break;
    case 'Escape':
      controls.unlock(); // Unlock the pointer controls
      document.removeEventListener('mousemove', handleMouseMove); // Remove the mousemove event listener
      break;

  }

};

document.addEventListener( 'keydown', onKeyDown );
document.addEventListener( 'keyup', onKeyUp );
document.addEventListener('mousemove', handleMouseMove, false);

  /*document.addEventListener('keydown', (event) =>{
	const key = event.key;
	switch (key){
		case 'w':
		input.up= true;
		break;
		case 's':
		input.down= true;
		break;
		case 'a':
		input.left= true;
		break;
		case 'd':
		input.right= true;
		break;
    case 'Space':
		if ( input.canJump === true ) velocity.y += 350;
		input.canJump = false;
		break;
      
	}
  })

  document.addEventListener('keyup', (event) =>{
	const key = event.key;
	switch (key){
		case 'w':
		input.up= false;
		break;
		case 's':
		input.down= false;
		break;
		case 'a':
		input.left= false;
		break;
		case 'd':
		input.right= false;
		break;
	}
  })*/
}