import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';

			import {OrbitControls} from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js';
            import { OBJLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/OBJLoader.js'
			import { MTLLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/MTLLoader.js'
			import {FBXLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/FBXLoader.js';
			import {GLTFLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/GLTFLoader.js';
      import {GUI} from ''


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
    var spotLight = new THREE.SpotLight(0xffffff, 1, 100, Math.PI/3, 0.5);
    spotLight.position.set(positions[i].x, positions[i].y + 10, positions[i].z);
    scene.add(spotLight);
    spotLights.push(spotLight);
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

var spotLightControls = [];
for (var i = 0; i < spotLights.length; i++) {
  var guiSpotLight = gui.addFolder(`Spot Light ${i+1}`);
  guiSpotLight.add(spotLights[i], 'intensity', 0, 2);
  guiSpotLight.add(spotLights[i], 'distance', 0, 200);
  guiSpotLight.add(spotLights[i], 'angle', 0, Math.PI/2);
  guiSpotLight.add(spotLights[i], 'penumbra', 0, 1);
  if (i >= 4) {
    guiSpotLight.close(); // Collapse the GUI folder for spotlights above the small cages
  }
  spotLightControls.push(guiSpotLight);
}

// Render loop
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

// Call the render loop
render();
