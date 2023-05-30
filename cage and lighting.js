import * as THREE from 'three';
      import {GUI} from '//cdn.skypack.dev/three@0.131.1/examples/jsm/libs/dat.gui.module.js'
      import fshader from './shader/fshader.glsl.js';
      import vshader from './shader/vshader.glsl.js';
export function initializeCageLighting(scene) {
      //GUI
      const gui = new GUI()


  var uniforms = {
    time: {value:0.0},
    resolution:{value: 3},
    intensity:{value: 10},
    speed: {value : 1},
    lightColor:{value: new THREE.Color(0.96078431372549, 0.541176470588235, 0)},
    baseColor:{value: new THREE.Color(1,1,1)},
  }
  
  const cageshaderMaterial = new THREE.ShaderMaterial({
    uniforms :uniforms,
    vertexShader :vshader,
    fragmentShader: fshader,
    side: THREE.DoubleSide
  })


  //smallbox 01
    const smallbox01 = new THREE.BoxGeometry(6, 2.5, 10);
    const smallbox01material = new THREE.MeshPhysicalMaterial({attenuationColor : 0xff0000});
    const smallbox01mesh = new THREE.Mesh(smallbox01, smallbox01material );
    smallbox01mesh.position.set(7,0.75, -42.2);
    smallbox01mesh.rotation.y = + 0.3; 
    //scene.add(smallbox01mesh);

//smallbox02
    const smallbox02 = new THREE.BoxGeometry(6, 2.5, 10);
    const smallbox02material = new THREE.MeshPhysicalMaterial();
    const smallbox02mesh = new THREE.Mesh(smallbox02, smallbox02material );
    smallbox02mesh.position.set(15.2, 0.75, -18.3);
    smallbox02mesh.rotation.y = +0.2; 
    //scene.add(smallbox02mesh);

//smallbox03
const smallbox03 = new THREE.BoxGeometry(6, 2.5, 10);
    const smallbox03material = new THREE.MeshPhysicalMaterial();
    const smallbox03mesh = new THREE.Mesh(smallbox03, smallbox03material );
    smallbox03mesh.position.set(10.9, 0.75, 6);
    
    //scene.add(smallbox03mesh);
    //smallbox04
    const smallbox04 = new THREE.BoxGeometry(6, 2.5, 10);
    const smallbox04material = new THREE.MeshPhysicalMaterial();
    const smallbox04mesh = new THREE.Mesh(smallbox04, smallbox04material );
    smallbox04mesh.position.set(6, 0.75, 25);
    smallbox04mesh.rotation.y = Math.PI/2;
    //scene.add(smallbox04mesh);

//smallbox01 lighting 
const smallbox01spotlight = new THREE.SpotLight(0xffffff, 0.4, 100, Math.PI/10, 0.2);
smallbox01spotlight.position.set(7,10, -42.2);
smallbox01spotlight.target.position.set(7,0.75, -42.2);
scene.add(smallbox01spotlight);
scene.add(smallbox01spotlight.target);

const smallbox01spotlightHelper = new THREE.SpotLightHelper(smallbox01spotlight);
//scene.add(smallbox01spotlightHelper);

//smallbox02 lighting
const smallbox02spotlight = new THREE.SpotLight(0xffffff, 0.4, 100, Math.PI/10, 0.2);
smallbox02spotlight.position.set(15.2, 10, -18.3);
smallbox02spotlight.target.position.set(15.2, 0.75, -18.3);
scene.add(smallbox02spotlight);
scene.add(smallbox02spotlight.target);

const smallbox02spotlightHelper = new THREE.SpotLightHelper(smallbox02spotlight);
//scene.add(smallbox02spotlightHelper);

//smallbox03 lighting
const smallbox03spotlight = new THREE.SpotLight(0xffffff, 0.4, 100, Math.PI/10, 0.2);
smallbox03spotlight.position.set(10.9, 10, 6);
smallbox03spotlight.target.position.set(10.9, 0.75, 6);
scene.add(smallbox03spotlight);
scene.add(smallbox03spotlight.target);

const smallbox03spotlightHelper = new THREE.SpotLightHelper(smallbox03spotlight);
//scene.add(smallbox03spotlightHelper);

//smallbox04 lighting
const smallbox04spotlight = new THREE.SpotLight(0xffffff, 0.4, 100, Math.PI/10, 0.2);
smallbox04spotlight.position.set(6, 10, 25);
smallbox04spotlight.target.position.set(6, 0.75, 25);
scene.add(smallbox04spotlight);
scene.add(smallbox04spotlight.target);

const smallbox04spotlightHelper = new THREE.SpotLightHelper(smallbox04spotlight);
//scene.add(smallbox04spotlightHelper);                   
//cage01

const cage01 = new THREE.BoxGeometry(10, 5, 10);
    const cage01material = new THREE.MeshPhysicalMaterial({attenuationColor : 0xff0000});
    const cage01mesh = new THREE.Mesh(cage01, cageshaderMaterial );
    cage01mesh.position.set(13, 0.75, -44);
    cage01mesh.rotation.y = + 0.3; 
    //scene.add(cage01mesh);

   const cageStone = new THREE.BoxGeometry(7, 11, 7);
    const cageStonematerial = new THREE.MeshPhysicalMaterial({attenuationColor : 0xffffff, color: 0xffffff});
    cageStonematerial.transmission = 1.0;
    cageStonematerial.roughness = 0;
    cageStonematerial.ior = 1.2;
    cageStonematerial.thickness = 0.1;
    const cageStonemesh = new THREE.Mesh(cageStone, cageStonematerial );
    cageStonemesh.position.set(13, 8, -44);
    cageStonemesh.rotation.y = + 0.3; 
    scene.add(cageStonemesh); 

//cage02
const cage02 = new THREE.BoxGeometry(10, 5, 10);
    const cage02material = new THREE.MeshPhysicalMaterial({attenuationColor : 0xff0000});
    const cage02mesh = new THREE.Mesh(cage02, cageshaderMaterial );
    cage02mesh.position.set(9,0.75, -17);
    cage02mesh.rotation.y = +0.2; 
    //scene.add(cage02mesh);
    const cageStone2 = new THREE.BoxGeometry(7, 11, 7);
    cageStonematerial.transmission = 1.0;
    cageStonematerial.roughness = 0;
    cageStonematerial.ior = 1.2;
    cageStonematerial.thickness = 0.1;
    const cageStonemesh2 = new THREE.Mesh(cageStone2, cageStonematerial);
    cageStonemesh2.position.set(9,8, -17);
    cageStonemesh2.rotation.y = + 0.2; 
    scene.add(cageStonemesh2); 

    //cage03
const cage03 = new THREE.BoxGeometry(10, 5, 10);
    const cage03material = new THREE.MeshPhysicalMaterial({attenuationColor : 0xff0000});
    const cage03mesh = new THREE.Mesh(cage03, cageshaderMaterial );
    cage03mesh.position.set(17.4, 0.75, 6);
    //scene.add(cage03mesh);
    const cageStone3 = new THREE.BoxGeometry(7, 11, 7);
    cageStonematerial.transmission = 1.0;
    cageStonematerial.roughness = 0;
    cageStonematerial.ior = 1.2;
    cageStonematerial.thickness = 0.1;
    const cageStonemesh3 = new THREE.Mesh(cageStone3, cageStonematerial);
    cageStonemesh3.position.set(17.4, 8, 6);
    scene.add(cageStonemesh3); 

    //cage04
const cage04 = new THREE.BoxGeometry(10, 5, 10);
const cage04material = new THREE.MeshPhysicalMaterial({attenuationColor : 0xff0000});
const cage04mesh = new THREE.Mesh(cage04, cageshaderMaterial );
cage04mesh.position.set(6, 0.75, 31);
//scene.add(cage04mesh);
const cageStone4 = new THREE.BoxGeometry(7, 11, 7);
    cageStonematerial.transmission = 1.0;
    cageStonematerial.roughness = 0;
    cageStonematerial.ior = 1.2;
    cageStonematerial.thickness = 0.1;
    const cageStonemesh4 = new THREE.Mesh(cageStone4, cageStonematerial);
    cageStonemesh4.position.set(6, 8, 31);
    scene.add(cageStonemesh4); 



wallGroup.add(cage01mesh, cage02mesh, cage03mesh, cage04mesh, smallbox01mesh, smallbox02mesh, smallbox03mesh, smallbox04mesh);

const clock = new THREE.Clock();
  
var animated = function(){
  uniforms.time.value = clock.getElapsedTime()
  requestAnimationFrame(animated);

}

animated();


//hallway light01
const halllight01spotlight = new THREE.SpotLight(0xffffff, 2, 100, Math.PI/5, 0.3);
halllight01spotlight.position.set(5, 9, -31.5);
halllight01spotlight.target.position.set(5, -0.5, -31.5);
scene.add(halllight01spotlight);
scene.add(halllight01spotlight.target);

const halllight01spotlightHelper = new THREE.SpotLightHelper(halllight01spotlight);
//scene.add(halllight01spotlightHelper);

//hallway light02
const halllight02spotlight = new THREE.SpotLight(0xffffff, 2, 100, Math.PI/5, 0.3);
halllight02spotlight.position.set(20, 9, -30.5);
halllight02spotlight.target.position.set(20, -0.5, -30.5);
scene.add(halllight02spotlight);
scene.add(halllight02spotlight.target);

const halllight02spotlightHelper = new THREE.SpotLightHelper(halllight02spotlight);
//scene.add(halllight02spotlightHelper);

//hallway light03
const halllight03spotlight = new THREE.SpotLight(0xffffff, 2, 100, Math.PI/5, 0.3);
halllight03spotlight.position.set(20, 9, -9.5);
halllight03spotlight.target.position.set(20, -0.5, -9.5);
scene.add(halllight03spotlight);
scene.add(halllight03spotlight.target);

const halllight03spotlightHelper = new THREE.SpotLightHelper(halllight03spotlight);
//scene.add(halllight03spotlightHelper);

//hallway light04
const halllight04spotlight = new THREE.SpotLight(0xffffff, 2, 100, Math.PI/5, 0.3);
halllight04spotlight.position.set(6, 9, -5);
halllight04spotlight.target.position.set(6, -0.5, -5);
scene.add(halllight04spotlight);
scene.add(halllight04spotlight.target);

const halllight04spotlightHelper = new THREE.SpotLightHelper(halllight04spotlight);
//scene.add(halllight04spotlightHelper);

//hallway light05
const halllight05spotlight = new THREE.SpotLight(0xffffff, 2, 100, Math.PI/5, 0.3);
halllight05spotlight.position.set(5, 9, 12);
halllight05spotlight.target.position.set(5, -0.5, 12);
scene.add(halllight05spotlight);
scene.add(halllight05spotlight.target);

const halllight05spotlightHelper = new THREE.SpotLightHelper(halllight05spotlight);
//scene.add(halllight05spotlightHelper);



// Rock lights
const light01 = new THREE.SpotLight(0xffffff, 1, 100, Math.PI/9, 0.5, 0)
light01.position.set(13, 20, -44)
light01.target.position.set(13, 2, -44)
scene.add(light01.target);

// for shadow
light01.castShadow = true
light01.shadow.mapSize.width = 1024
light01.shadow.mapSize.height = 1024
light01.shadow.camera.near = 0.5
light01.shadow.camera.far = 100
scene.add(light01)
const helper01 = new THREE.SpotLightHelper(light01)
//scene.add(helper01)
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
//spotLightFolder01.open()

// bronze lights
const light02 = new THREE.SpotLight(0xffffff, 1, 100, Math.PI/9, 0.5, 0)
light02.position.set(9, 20, -17)
light02.target.position.set(9, 2, -17)
scene.add(light02.target);
// for bronse shadow
light02.castShadow = true
light02.shadow.mapSize.width = 1024
light02.shadow.mapSize.height = 1024
light02.shadow.camera.near = 0.5
light02.shadow.camera.far = 100
scene.add(light02)
const helper02 = new THREE.SpotLightHelper(light02)
//scene.add(helper02)
// bronze light controls
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
//spotLightFolder02.open()

// iron lights
const light03 = new THREE.SpotLight(0xffffff, 1, 100, Math.PI/9, 0.5, 0)
light03.position.set(17.4, 20, 6)
light03.target.position.set(17.4, 4.5, 6)
scene.add(light03.target);
// for  iron shadow
light03.castShadow = true
light03.shadow.mapSize.width = 1024
light03.shadow.mapSize.height = 1024
light03.shadow.camera.near = 0.5
light03.shadow.camera.far = 100
scene.add(light03)
const helper03 = new THREE.SpotLightHelper(light03)
//scene.add(helper03)
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
//spotLightFolder03.open()

// morden lights
const light04 = new THREE.SpotLight(0xffffff, 1, 100, Math.PI/9, 0.5, 0)
light04.position.set(6, 20, 31)
light04.target.position.set(6, 4.5, 31)
scene.add(light04.target);
// for morden shadow
light04.castShadow = true
light04.shadow.mapSize.width = 1024
light04.shadow.mapSize.height = 1024
light04.shadow.camera.near = 0.5
light04.shadow.camera.far = 100
scene.add(light04)
const helper04 = new THREE.SpotLightHelper(light04)
//scene.add(helper04)
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

var color = {
  light: [245, 138, 0], // initial light color
  base: [255, 255, 255] // initial base color
};

var basefolder = gui.addFolder('Base Modification');
basefolder.add(uniforms.intensity, 'value', 0, 20).name('Light Intensity')
basefolder.add(uniforms.speed, 'value', 0, 10).name('Light Speed')
basefolder.add(uniforms.resolution, 'value', 0, 50).name('Resolution')
basefolder.addColor(color, 'light').name('Light Color').onChange(function(value) {
    // Update the light color uniform with the new color value
    uniforms.lightColor.value.setRGB(value[0]/255, value[1]/255, value[2]/255);
  });
basefolder.addColor(color, 'base').name('Base Color')
  .onChange(function(value) {
    // Update the base color uniform with the new color value
    uniforms.baseColor.value.setRGB(value[0]/255, value[1]/255, value[2]/255);
  });
basefolder.open()

//spotLightFolder04.open()

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


const guiElement = document.getElementById('your-gui-element-id');
if (guiElement) {
  console.log(guiElement.id); // Print the id of the GUI element
} else {
  console.log('GUI element not found');
}

      }
      export const wallGroup = new THREE.Group();


