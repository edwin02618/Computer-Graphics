import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';

			import {OrbitControls} from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js';
            import { OBJLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/OBJLoader.js'
			import { MTLLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/MTLLoader.js'
			import {FBXLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/FBXLoader.js';
			import {GLTFLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/GLTFLoader.js';
      import {GUI} from 'https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.7.7/dat.gui.js'

      //GUI
      const gui = new dat.GUI()


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
  var smallBoxes = [
    new THREE.Vector3(6,1, 7),
    new THREE.Vector3(-6, 1, 15.5),
    new THREE.Vector3(6, 1, 24),
    new THREE.Vector3(-6, 1, 32.5)
  ];
  for (var i = 0; i < positions.length; i++) {
    var geometry = new THREE.BoxGeometry(10, 2, 3);
    var smallbox = new THREE.Mesh(geometry, materials[i]);
    smallBox.position.copy(smallBoxPosition);
    scene.add(smallbox);
    smallBox.push(smallbox);

    // Create the spot light for the small box
  var smallBoxSpotLight = new THREE.SpotLight(0xffffff, 1, 100, Math.PI/3, 0.5);
  smallBoxSpotLight.position.set(smallBoxPosition.x, smallBoxPosition.y + 5, smallBoxPosition.z);
  smallBoxSpotLight.target = smallBox;
  scene.add(smallBoxSpotLight);
  spotLights.push(smallBoxSpotLight);
  }
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
scene.add(light)
const helper01 = new THREE.SpotLightHelper(light)
scene.add(helper01)
// Rock light controls
const lightColor01 = {
  color: light01.color.getHex()
}
const lightFolder01 = gui.addFolder('Light')
lightFolder01.addColor(lightColor01, 'color').onChange(() => {
light01.color.set(lightColor01.color)
})
lightFolder01.add(light, 'intensity', 0, 1, 0.01)
lightFolder01.open()
const spotLightFolder01 = gui.addFolder('SpotLight')
spotLightFolder01.add(light, 'distance', 0, 100, 0.01)
spotLightFolder01.add(light, 'decay', 0, 4, 0.1)
spotLightFolder01.add(light, 'angle', 0, 1, 0.1)
spotLightFolder01.add(light, 'penumbra', 0, 1, 0.1)
spotLightFolder01.add(light.position, 'x', -50, 50, 1)
spotLightFolder01.add(light.position, 'y', -50, 50, 1)
spotLightFolder01.add(light.position, 'z', -50, 50, 1)
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
scene.add(light)
const helper02 = new THREE.SpotLightHelper(light)
scene.add(helper02)
// bronse light controls
const lightColor02 = {
  color: light02.color.getHex()
}
const lightFolder02 = gui.addFolder('Light')
lightFolder01.addColor(lightColor02, 'color').onChange(() => {
light01.color.set(lightColor02.color)
})
lightFolder02.add(light, 'intensity', 0, 1, 0.01)
lightFolder02.open()
const spotLightFolder02 = gui.addFolder('SpotLight')
spotLightFolder02.add(light, 'distance', 0, 100, 0.01)
spotLightFolder02.add(light, 'decay', 0, 4, 0.1)
spotLightFolder02.add(light, 'angle', 0, 1, 0.1)
spotLightFolder02.add(light, 'penumbra', 0, 1, 0.1)
spotLightFolder02.add(light.position, 'x', -50, 50, 1)
spotLightFolder02.add(light.position, 'y', -50, 50, 1)
spotLightFolder02.add(light.position, 'z', -50, 50, 1)
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
scene.add(light)
const helper03 = new THREE.SpotLightHelper(light)
scene.add(helper03)
// iron light controls
const lightColor03 = {
  color: light03.color.getHex()
}
const lightFolder03 = gui.addFolder('Light')
lightFolder01.addColor(lightColor03, 'color').onChange(() => {
light01.color.set(lightColor03.color)
})
lightFolder03.add(light, 'intensity', 0, 1, 0.01)
lightFolder03.open()
const spotLightFolder03 = gui.addFolder('SpotLight')
spotLightFolder03.add(light, 'distance', 0, 100, 0.01)
spotLightFolder03.add(light, 'decay', 0, 4, 0.1)
spotLightFolder03.add(light, 'angle', 0, 1, 0.1)
spotLightFolder03.add(light, 'penumbra', 0, 1, 0.1)
spotLightFolder03.add(light.position, 'x', -50, 50, 1)
spotLightFolder03.add(light.position, 'y', -50, 50, 1)
spotLightFolder03.add(light.position, 'z', -50, 50, 1)
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
scene.add(light)
const helper04 = new THREE.SpotLightHelper(light)
scene.add(helper04)
// morden light controls
const lightColor04 = {
  color: light04.color.getHex()
}
const lightFolder04 = gui.addFolder('Light')
lightFolder01.addColor(lightColor04, 'color').onChange(() => {
light01.color.set(lightColor04.color)
})
lightFolder04.add(light, 'intensity', 0, 1, 0.01)
lightFolder04.open()
const spotLightFolder04 = gui.addFolder('SpotLight')
spotLightFolder04.add(light, 'distance', 0, 100, 0.01)
spotLightFolder04.add(light, 'decay', 0, 4, 0.1)
spotLightFolder04.add(light, 'angle', 0, 1, 0.1)
spotLightFolder04.add(light, 'penumbra', 0, 1, 0.1)
spotLightFolder04.add(light.position, 'x', -50, 50, 1)
spotLightFolder04.add(light.position, 'y', -50, 50, 1)
spotLightFolder04.add(light.position, 'z', -50, 50, 1)
spotLightFolder04.open()

// Render loop
//function render() {
  //requestAnimationFrame(render);
  //renderer.render(scene, camera);
//}

// Call the render loop
//render();

// renderer
const renderer = new THREE.WebGL1Renderer()
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
