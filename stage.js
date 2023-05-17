import * as THREE from 'three';
import {OrbitControls} from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js';


//create the scene
//var scene = new THREE.Scene( );

//create the webgl renderer
export function initializeStage(scene) {
var renderer = new THREE.WebGLRenderer( );

renderer.setSize(window.innerWidth,window.innerHeight);

//add the renderer to the current document
document.body.appendChild(renderer.domElement );


var ambientlight = new THREE.AmbientLight(new THREE.Color(1,1,1),1);
scene.add(ambientlight);




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

var controls = new OrbitControls( camera, renderer.domElement );

const input = {
    up:false,
    down: false,
    left: false,
    riht: false,
  }

const loader = new THREE.TextureLoader();

const backgroundtexture = loader.load('img/background.jpg');

backgroundtexture.wrapS = THREE.RepeatWrapping;
backgroundtexture.wrapT = THREE.RepeatWrapping;
backgroundtexture.repeat = new THREE.Vector2(60,1)
const backgroundGeometry = new THREE.SphereGeometry( 100, 64,32 );
const backgroundmaterial = new THREE.MeshBasicMaterial( {map: backgroundtexture } );
const backgroundsphere = new THREE.Mesh( backgroundGeometry, backgroundmaterial );
backgroundsphere.material.side = THREE.BackSide;
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
const rightWall1 = new THREE.Mesh(new THREE.BoxGeometry(40, 10, 1), wallMaterial );

rightWall1.rotation.y = Math.PI / 2 + 0.3; 
rightWall1.position.x = -4.5;
rightWall1.position.y = 4.5;
rightWall1.position.z = -40;

// left Wall
const leftWall1 = new THREE.Mesh(new THREE.BoxGeometry(18, 10, 1), wallMaterial );

leftWall1.rotation.y = Math.PI / 2+ 0.3; 
leftWall1.position.x = 4.5; 
leftWall1.position.y = 4.5;
leftWall1.position.z = -42;

const rightwall2 = new THREE.Mesh(new THREE.BoxGeometry(16, 10, 1), wallMaterial );
rightwall2.rotation.y = +0.2; 
rightwall2.position.z = -23;
rightwall2.position.y = 4.5;
rightwall2.position.x = 8.5;

const leftWall2 = new THREE.Mesh(new THREE.BoxGeometry(20, 10, 1), wallMaterial );

leftWall2.rotation.y = +0.3; 
leftWall2.position.x = 16.1; 
leftWall2.position.y = 4.5;
leftWall2.position.z = -39;

const leftWall3 = new THREE.Mesh(new THREE.BoxGeometry(38, 10, 1), wallMaterial );
leftWall3.rotation.y = Math.PI / 2; 
leftWall3.position.x = 25.1;
leftWall3.position.z = -23;
leftWall3.position.y = 4.5;


const rightWall3 = new THREE.Mesh(new THREE.BoxGeometry(17, 10, 1), wallMaterial );

rightWall3.rotation.y = Math.PI / 2
rightWall3.position.x = 17.32; 
rightWall3.position.y = 4.5;
rightWall3.position.z = -19.7;

const leftWall4 = new THREE.Mesh(new THREE.BoxGeometry(16, 10, 1), wallMaterial );
leftWall4.rotation.y = 0.2
leftWall4.position.x = 17.9;
leftWall4.position.z = -2;
leftWall4.position.y = 4.5;

const rightWall4 = new THREE.Mesh(new THREE.BoxGeometry(18, 10, 1), wallMaterial );
rightWall4.rotation.y = 0.2
rightWall4.position.x = 9.4;
rightWall4.position.z = -10.8;
rightWall4.position.y = 4.5;

const rightWall5 = new THREE.Mesh(new THREE.BoxGeometry(35, 10, 1), wallMaterial );
rightWall5.rotation.y = Math.PI / 2 
rightWall5.position.x = 0;
rightWall5.position.z = +7;
rightWall5.position.y = 4.5;

const leftWall5 = new THREE.Mesh(new THREE.BoxGeometry(11, 10, 1), wallMaterial );
leftWall5.rotation.y = Math.PI / 2 
leftWall5.position.x = 10.9;
leftWall5.position.z = +5.3;
leftWall5.position.y = 4.5;

let wallGroup = new THREE.Group(); // create a group to hold the walls
scene.add(wallGroup); // add the group to the scene, then any child added to the group will display to the scene too

wallGroup.add(frontWall1, rightWall1, //leftWall1, 
			rightwall2,leftWall2, 
			leftWall3, //rightWall3,
			leftWall4, rightWall4,
			rightWall5,/*leftWall5*/ );

//create collidableList and assign all the children in wall group
const collidableMeshList = wallGroup.children;


const clock = new THREE.Clock();
const movementSpeed = 10;
const rotationSpeed = 2;

update();

function update(){
  const delta = clock.getDelta();
  let facing = new THREE.Vector3();
  camera.getWorldDirection(facing);
  //controls.update();

  if (input.up){
    var raycaster = new THREE.Raycaster(camera.position, facing);
    var intersects = raycaster.intersectObjects(collidableMeshList);

    if (intersects.length > 0 && intersects[0].distance < 1) {
      // the distance can be changed to adjust the collision threshold
      // a collision occurred, do nothing, player won't be able to move forward
      //console.log("Collision detected");
    } else {
      camera.position.z += facing.z * movementSpeed * delta;
      camera.position.x += facing.x * movementSpeed * delta;
    }
  }
  if (input.down){
	var raycasterback = new THREE.Raycaster(camera.position, facing.negate());
    var intersectsBack = raycasterback.intersectObjects(collidableMeshList);

	if (intersectsBack.length > 0 && intersectsBack[0].distance < 1.5) {
      // the distance can be changed to adjust the collision threshold
      // a collision occurred, do nothing, player won't be able to move forward
      //console.log("Collision detected");
    } else {
	camera.position.z -= facing.negate().z * movementSpeed * delta;
	camera.position.x -= facing.x * movementSpeed * delta;
  }
}
  if (input.right){
	camera.rotation.y +=rotationSpeed * delta;
  }
  if (input.left){
	camera.rotation.y -=rotationSpeed * delta;
  }


  requestAnimationFrame(update)
  renderer.render(scene, camera);
}



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
  document.addEventListener('keydown', (event) =>{
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
  })
}