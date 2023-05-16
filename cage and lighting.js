import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';

			import {OrbitControls} from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js';
            import { OBJLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/OBJLoader.js'
			import { MTLLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/MTLLoader.js'
			import {FBXLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/FBXLoader.js';
			import {GLTFLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/GLTFLoader.js';
      import {GUI} from '//cdn.skypack.dev/three@0.131.1/examples/jsm/libs/dat.gui.module.js'

      //GUI
      const gui = new GUI()


      var scene = new THREE.Scene();

    //create the webgl renderer
    var renderer = new THREE.WebGLRenderer( );

    renderer.setSize(window.innerWidth,window.innerHeight);

    //add the renderer to the current document
    document.body.appendChild(renderer.domElement);

    var ratio = window.innerWidth/window.innerHeight;

    //create the perspective camera
    //for parameters see https://threejs.org/docs/#api/cameras/PerspectiveCamera
    var camera = new THREE.PerspectiveCamera(45,ratio,0.1,1000);
    camera.position.set(0,1,0);

    var controls = new OrbitControls( camera, renderer.domElement );

            // Create the materials
var materials = [
    new THREE.MeshBasicMaterial({ color: 0xff0000 }), // red
    new THREE.MeshBasicMaterial({ color: 0x00ff00 }), // green
    new THREE.MeshBasicMaterial({ color: 0x0000ff }), // blue
    new THREE.MeshBasicMaterial({ color: 0xffff00 })  // yellow
  ];
  
  // Create the cages and spot lights and add them to the scene
  var cages = [];
  var spotLights = [];
  var smallBox = [
    new THREE.Vector3(6,1, 7),
    new THREE.Vector3(-6, 1, 15.5),
    new THREE.Vector3(6, 1, 24),
    new THREE.Vector3(-6, 1, 32.5)
  ];
  //smallbox 01
    const smallbox01 = new THREE.BoxGeometry(3, 2.5, 10);
    const smallbox01material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const smallbox01mesh = new THREE.Mesh(smallbox01, smallbox01material );
    smallbox01mesh.position.set(6,1.25, 7);
    scene.add(smallbox01mesh);
//smallbox02
    const smallbox02 = new THREE.BoxGeometry(3, 2.5, 10);
    const smallbox02material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const smallbox02mesh = new THREE.Mesh(smallbox02, smallbox02material );
    smallbox02mesh.position.set(-6, 1, 15.5);
    scene.add(smallbox02mesh);

//smallbox03
const smallbox03 = new THREE.BoxGeometry(3, 2.5, 10);
    const smallbox03material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    const smallbox03mesh = new THREE.Mesh(smallbox03, smallbox03material );
    smallbox03mesh.position.set(6, 1.25, 24);
    scene.add(smallbox03mesh);
    //smallbox04
    const smallbox04 = new THREE.BoxGeometry(3, 2.5, 10);
    const smallbox04material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const smallbox04mesh = new THREE.Mesh(smallbox04, smallbox04material );
    smallbox04mesh.position.set(-6, 1.25, 32.5);
    scene.add(smallbox04mesh);

//smallbox01 lighting 
const smallbox01spotlight = new THREE.SpotLight(0xffffff, 1, 100, Math.PI/3, 0.5);
smallbox01spotlight.position.set(6,10, 7);
scene.add(smallbox01spotlight);

const smallbox01spotlightHelper = new THREE.SpotLightHelper(smallbox01spotlight);
scene.add(smallbox01spotlightHelper);

//smallbox02 lighting
const smallbox02spotlight = new THREE.SpotLight(0xffffff, 1, 100, Math.PI/3, 0.5);
smallbox01spotlight.position.set(-6, 1, 15.5);
scene.add(smallbox02spotlight);

const smallbox02spotlightHelper = new THREE.SpotLightHelper(smallbox02spotlight);
scene.add(smallbox02spotlightHelper);

//smallbox03 lighting
const smallbox03spotlight = new THREE.SpotLight(0xffffff, 1, 100, Math.PI/3, 0.5);
smallbox03spotlight.position.set(6, 1, 24);
scene.add(smallbox03spotlight);

const smallbox03spotlightHelper = new THREE.SpotLightHelper(smallbox03spotlight);
scene.add(smallbox03spotlightHelper);

//smallbox04 lighting
const smallbox04spotlight = new THREE.SpotLight(0xffffff, 1, 100, Math.PI/3, 0.5);
smallbox04spotlight.position.set(-6, 1, 32.5);
scene.add(smallbox04spotlight);

const smallbox04spotlightHelper = new THREE.SpotLightHelper(smallbox04spotlight);
scene.add(smallbox04spotlightHelper);
    


   
  
  var positions = [
    new THREE.Vector3(12.5, 2.5, 7),
    new THREE.Vector3(-12.5, 2.5, 15.5),
    new THREE.Vector3(12.5, 2.5, 24),
    new THREE.Vector3(-12.5, 2.5, 32.5)
  ];
  for (var i = 0; i < positions.length; i++) {
    var geometry = new THREE.BoxGeometry(10, 5, 10);
    var cage = new THREE.Mesh(geometry, materials[i]);
    cage.position.copy(positions[i]);
    scene.add(cage);
    cages.push(cage);
  
    // Create a spot light
    //var spotLight = new THREE.SpotLight(0xffffff, 1, 100, Math.PI/3, 0.5);
    //spotLight.position.set(positions[i].x, positions[i].y + 10, positions[i].z);
    //scene.add(spotLight);
    //spotLights.push(spotLight);
  }

  // Create the hallway spotlights
var spotLights = [];
var spotLightColors = [0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff];
var spotLightPositions = [
  new THREE.Vector3(0, 15, 6.5),
  new THREE.Vector3(0, 15, 13),
  new THREE.Vector3(0, 15, 19.5),
  new THREE.Vector3(0, 15, 26),
  new THREE.Vector3(0, 15, 32.5)
];
for (var i = 0; i < spotLightPositions.length; i++) {
  var spotLight = new THREE.SpotLight(spotLightColors[i]);
  spotLight.name = "hallwaySpotlight" + i; // Set the name
  spotLight.position.copy(spotLightPositions[i]);
  spotLight.angle = Math.PI/3;
  spotLight.penumbra = 0.2;
  spotLight.decay = 2;
  spotLight.distance = 50;
  scene.add(spotLight);
  spotLights.push(spotLight);
}

  // Create the small box
  //var smallBoxGeometry = new THREE.BoxGeometry(10, 2, 3);
  //var smallBox = new THREE.Mesh(smallBoxGeometry, materials[i]);
  //var smallBoxPosition = new THREE.Vector3(6,1,7);
  //smallBox.position.copy(smallBoxPosition);
  //scene.add(smallBox);
  //smallBoxes.push(smallBox);

  
  
  // GUI Controls
 // var guiControls = new function () {
   // this.spotLightIntensity = 1;
    //this.spotLightDistance = 100;
    //this.spotLightAngle = Math.PI/3;
    //this.spotLightPenumbra = 0.5;
  //}
  
  //var gui = new dat.GUI();
  //for (var i = 0; i < cages.length; i++) {
    //var spotLightFolder = gui.addFolder("Spot Light " + i);
    //spotLightFolder.add(spotLights[i], 'intensity', 0, 2).name('Intensity').onChange(function(value) {
      //spotLights[i].intensity = value;
    //});
    //spotLightFolder.add(spotLights[i], 'distance', 0, 200).name('Distance').onChange(function(value) {
    //  spotLights[i].distance = value;
    //});
    //spotLightFolder.add(guiControls, 'spotLightAngle', 0, Math.PI).name('Angle').onChange(function(value) {
    //  spotLights[i].angle = value;
    //});
    //spotLightFolder.add(guiControls, 'spotLightPenumbra', 0, 1).name('Penumbra').onChange(function(value) {
    //  spotLights[i].penumbra = value;
    //});
    //spotLightFolder.open();
  //}
  // Create GUI controls for the spotlights

//var spotLightControls = [];
//for (var i = 0; i < spotLights.length; i++) {
 // var guiSpotLight = gui.addFolder(`Spot Light ${i+1}`);
 // guiSpotLight.add(spotLights[i], 'intensity', 0, 2);
  //guiSpotLight.add(spotLights[i], 'distance', 0, 200);
  //guiSpotLight.add(spotLights[i], 'angle', 0, Math.PI/2);
  //guiSpotLight.add(spotLights[i], 'penumbra', 0, 1);
  //if (i >= 4) {
    //guiSpotLight.close(); // Collapse the GUI folder for spotlights above the small cages
  //}
  //spotLightControls.push(guiSpotLight);
//}

//lighting code
//lighting 01 = stone spot light
//lighting 02 = bronse spot light
//lighting 03 = iron spot light
//lighting 04 = morden spot light
//Rock spot light

// Rock lights
const light01 = new THREE.SpotLight()
light01.position.set(12.5, 15, 7)
// for shadow
light01.castShadow = true
light01.shadow.mapSize.width = 1024
light01.shadow.mapSize.height = 1024
light01.shadow.camera.near = 0.5
light01.shadow.camera.far = 100
scene.add(light01)
const helper01 = new THREE.SpotLightHelper(light01)
scene.add(helper01)
// Rock light controls
const lightColor01 = {
  color: light01.color.getHex()
}
const lightFolder01 = gui.addFolder('Light01')
lightFolder01.addColor(lightColor01, 'color').onChange(() => {
light01.color.set(lightColor01.color)
})
lightFolder01.add(light01, 'intensity', 0, 1, 0.01)
lightFolder01.open()
const spotLightFolder01 = gui.addFolder('SpotLight01')
spotLightFolder01.add(light01, 'distance', 0, 100, 0.01)
spotLightFolder01.add(light01, 'decay', 0, 4, 0.1)
spotLightFolder01.add(light01, 'angle', 0, 1, 0.1)
spotLightFolder01.add(light01, 'penumbra', 0, 1, 0.1)
spotLightFolder01.add(light01.position, 'x', -50, 50, 1)
spotLightFolder01.add(light01.position, 'y', -50, 50, 1)
spotLightFolder01.add(light01.position, 'z', -50, 50, 1)
spotLightFolder01.open()

// bronse lights
const light02 = new THREE.SpotLight()
light02.position.set(-12.5, 2.5, 15.5)
// for bronse shadow
light02.castShadow = true
light02.shadow.mapSize.width = 1024
light02.shadow.mapSize.height = 1024
light02.shadow.camera.near = 0.5
light02.shadow.camera.far = 100
scene.add(light02)
const helper02 = new THREE.SpotLightHelper(light02)
scene.add(helper02)
// bronse light controls
const lightColor02 = {
  color: light02.color.getHex()
}
const lightFolder02 = gui.addFolder('Light02')
lightFolder02.addColor(lightColor02, 'color').onChange(() => {
light02.color.set(lightColor02.color)
})
lightFolder02.add(light02, 'intensity', 0, 1, 0.01)
lightFolder02.open()
const spotLightFolder02 = gui.addFolder('SpotLight02')
spotLightFolder02.add(light02, 'distance', 0, 100, 0.01)
spotLightFolder02.add(light02, 'decay', 0, 4, 0.1)
spotLightFolder02.add(light02, 'angle', 0, 1, 0.1)
spotLightFolder02.add(light02, 'penumbra', 0, 1, 0.1)
spotLightFolder02.add(light02.position, 'x', -50, 50, 1)
spotLightFolder02.add(light02.position, 'y', -50, 50, 1)
spotLightFolder02.add(light02.position, 'z', -50, 50, 1)
spotLightFolder02.open()

// iron lights
const light03 = new THREE.SpotLight()
light03.position.set(12.5, 2.5, 24)
// for  iron shadow
light03.castShadow = true
light03.shadow.mapSize.width = 1024
light03.shadow.mapSize.height = 1024
light03.shadow.camera.near = 0.5
light03.shadow.camera.far = 100
scene.add(light03)
const helper03 = new THREE.SpotLightHelper(light03)
scene.add(helper03)
// iron light controls
const lightColor03 = {
  color: light03.color.getHex()
}
const lightFolder03 = gui.addFolder('Light03')
lightFolder03.addColor(lightColor03, 'color').onChange(() => {
light03.color.set(lightColor03.color)
})
lightFolder03.add(light03, 'intensity', 0, 1, 0.01)
lightFolder03.open()
const spotLightFolder03 = gui.addFolder('SpotLight03')
spotLightFolder03.add(light03, 'distance', 0, 100, 0.01)
spotLightFolder03.add(light03, 'decay', 0, 4, 0.1)
spotLightFolder03.add(light03, 'angle', 0, 1, 0.1)
spotLightFolder03.add(light03, 'penumbra', 0, 1, 0.1)
spotLightFolder03.add(light03.position, 'x', -50, 50, 1)
spotLightFolder03.add(light03.position, 'y', -50, 50, 1)
spotLightFolder03.add(light03.position, 'z', -50, 50, 1)
spotLightFolder03.open()

// morden lights
const light04 = new THREE.SpotLight()
light04.position.set(-12.5, 2.5, 32.5)
// for morden shadow
light04.castShadow = true
light04.shadow.mapSize.width = 1024
light04.shadow.mapSize.height = 1024
light04.shadow.camera.near = 0.5
light04.shadow.camera.far = 100
scene.add(light04)
const helper04 = new THREE.SpotLightHelper(light04)
scene.add(helper04)
// morden light controls
const lightColor04 = {
  color: light04.color.getHex()
}
const lightFolder04 = gui.addFolder('Light04')
lightFolder04.addColor(lightColor04, 'color').onChange(() => {
light04.color.set(lightColor04.color)
})
lightFolder04.add(light04, 'intensity', 0, 1, 0.01)
lightFolder04.open()
const spotLightFolder04 = gui.addFolder('SpotLight04')
spotLightFolder04.add(light04, 'distance', 0, 100, 0.01)
spotLightFolder04.add(light04, 'decay', 0, 4, 0.1)
spotLightFolder04.add(light04, 'angle', 0, 1, 0.1)
spotLightFolder04.add(light04, 'penumbra', 0, 1, 0.1)
spotLightFolder04.add(light04.position, 'x', -50, 50, 1)
spotLightFolder04.add(light04.position, 'y', -50, 50, 1)
spotLightFolder04.add(light04.position, 'z', -50, 50, 1)
spotLightFolder04.open()

// Render loop
//function render() {
  //requestAnimationFrame(render);
  //renderer.render(scene, camera);
//}

// Call the render loop
//render();

// renderer
//const renderer = new THREE.WebGL1Renderer()
//renderer.setSize(window.innerWidth, window.innerHeight)
//renderer.shadowMap.enabled = true
//renderer.shadowMap.type = THREE.PCFSoftShadowMap
//renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

renderer.render(scene, camera);

				var MyUpdateLoop = function ( )
				{
			
				  controls.update();
				  //call the render with the scene and the camera
				  renderer.render(scene,camera);
				  //finally perform a recoursive call to update again
				  //this must be called because the mouse change the camera position
				  requestAnimationFrame(MyUpdateLoop);
				};
			
				requestAnimationFrame(MyUpdateLoop);
				var MyResize = function ( )
				{
					var width = window.innerWidth;
					var height = window.innerHeight;
					renderer.setSize(width,height);
					camera.aspect = width/height;
					camera.updateProjectionMatrix();
					renderer.render(scene,camera);
				};
