
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';

			import {OrbitControls} from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js';
            import { OBJLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/OBJLoader.js'
			import { MTLLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/MTLLoader.js'
			import {FBXLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/FBXLoader.js';
			import {GLTFLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/GLTFLoader.js';
            //import {GUI} from './build/gui/lil-gui.module.min.js';
	
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
    camera.position.set(5,2,-20);

    var controls = new OrbitControls( camera, renderer.domElement );
	
	light();

	function light() {

		var spotlight = new THREE.SpotLight();
		//spotlight.color = new THREE.Color(0xfdd8ff);
		spotlight.position.set(-0.7,20,0.5);
		spotlight.castShadow = true;
		spotlight.intensity = .5;
		const lightcolor = new THREE.Color(0x1fffff);
		//spotlight.lightcolor.set = lightcolor;

		
		scene.add(spotlight);

		/*var dirlight = new THREE.DirectionalLight(0xfdd8ff);
		dirlight.position.set(1);
		//dirlight.castShadow = true;
		dirlight.intensity = 3;
		scene.add(dirlight);
		*/
		const light = new THREE.HemisphereLight();
		light.color = new THREE.Color(0x7ee6fb);
		light.groundColor = new THREE.Color(0xfafebe);
		scene.add(light);
		
	  
		//const helper = new THREE.HemisphereLightHelper(light, 5)
		//scene.add(helper);	


		var ambi = new THREE.AmbientLight(new THREE.Color(1,1,1),7);
		scene.add(ambi);

		var pointlight = new THREE.PointLight(0xffffff, 2, 200);
		pointlight.position.set(4.5,1,-4.5);
		//pointlight.castShadow = true;
		pointlight.intensity = 2;
		scene.add(pointlight);
	}

	const mtlLoader = new MTLLoader();
	const gltfLoader = new GLTFLoader();

				mtlLoader.load('./models/stone_spear/stone_spear.mtl', function(stoneSmaterial){
				stoneSmaterial.preload();

				const objLoader = new OBJLoader();		
				objLoader.setMaterials(stoneSmaterial);	
				objLoader.load('./models/stone_spear/stone_spear.obj', function ( stoneSgeometry ) {
					
					stoneSgeometry.rotation.y = Math.PI / 2-1.1;
					stoneSgeometry.position.set( 3, 0.5, 1);
					stoneSgeometry.scale.set( 2, 2, 2 );
					stoneSgeometry.name = "loaded_mesh"
					stoneSgeometry.isDraggable = true;
					scene.add( stoneSgeometry);
					
				});
				})
	
	
	
				gltfLoader.load('./models/stone_knife/scene.gltf',(stone_knief) => {
					stone_knief.scene.rotation.y = Math.PI / 8;
					stone_knief.scene.scale.set(0.5,0.5,0.5);
					stone_knief.scene.position.set( -1, 0.5, 1);
					scene.add(stone_knief.scene);
				})


				mtlLoader.load('./models/stone_bow/uploads_files_1832926_bow.mtl', function(stoneBmaterial){
					stoneBmaterial.preload();
	
					const objLoader = new OBJLoader();		
					objLoader.setMaterials(stoneBmaterial);	
					objLoader.load('./models/stone_bow/uploads_files_1832926_bow.obj', function ( stoneBgeometry ) {
						
						stoneBgeometry.rotation.y = Math.PI / 2-1;
						stoneBgeometry.position.set( 4, -3, 0);
						stoneBgeometry.scale.set( 3, 3, 3 );
						
						stoneBgeometry.isDraggable = true;
						scene.add( stoneBgeometry);
						
					});
					})

				gltfLoader.load('./models/stone_axe/scene.gltf',(stone_axe) => {
					stone_axe.scene.rotation.x = Math.PI / 2;
					stone_axe.scene.rotation.z = Math.PI / 2;
					
					stone_axe.scene.position.set( -5, 0.5, 5);
					scene.add(stone_axe.scene);
				})
				

				/*const fbxLoader = new FBXLoader();
				fbxLoader.load('./models/iron_spear/spear.fbx', (iron_spear) => {
					iron_spear.position.set( 1, 0.5, 1);
					iron_spear.scale.set( 0.005, 0.005, 0.005 );
					scene.add(iron_spear);
					MyUpdateLoop();
				})*/

				gltfLoader.load('./models/iron_spear/scene.gltf',(iron_spear) => {
					iron_spear.scene.rotation.x = Math.PI / -2;
					iron_spear.scene.scale.set(0.1,0.1,0.1);
					iron_spear.scene.position.set( -7, 0.5, 5);
					scene.add(iron_spear.scene);
				})

				gltfLoader.load('./models/iron_sword/scene.gltf',(iron_sword) => {
					iron_sword.scene.rotation.z = Math.PI / -2;
					iron_sword.scene.scale.set(10,10,10);
					iron_sword.scene.position.set( -9, -4, 5);
					scene.add(iron_sword.scene);
				})

				gltfLoader.load('./models/iron_axe/scene.gltf',(iron_axe) => {
					iron_axe.scene.rotation.y = Math.PI / -2;
					iron_axe.scene.scale.set(0.05,0.05,0.05);
					iron_axe.scene.position.set( -12, 0, 5);
					scene.add(iron_axe.scene);
				})
				
				gltfLoader.load('./models/iron_crossbow/scene.gltf',(iron_crossbow) => {
					iron_crossbow.scene.rotation.x = Math.PI / -2+2;
					iron_crossbow.scene.scale.set(3,3,3);
					iron_crossbow.scene.position.set( -18, 0, 5);
					scene.add(iron_crossbow.scene);
				})

				gltfLoader.load('./models/bronze_dagger/scene.gltf',(bronze_dagger) => {
					bronze_dagger.scene.rotation.y = Math.PI / 2;
					bronze_dagger.scene.scale.set(0.1,0.1,0.1);
					bronze_dagger.scene.position.set( -20, 0, 5);
					scene.add(bronze_dagger.scene);
				})

				gltfLoader.load('./models/bronze_khopesh/scene.gltf',(bronze_khopesh) => {
					bronze_khopesh.scene.rotation.x = Math.PI / 2+4;
					bronze_khopesh.scene.rotation.y = Math.PI / -1.2;
					//bronze_khopesh.scene.rotation.z = Math.PI / 1.2;

					bronze_khopesh.scene.scale.set(0.2,0.2,0.2);
					bronze_khopesh.scene.position.set( -22, 0, 5);
					scene.add(bronze_khopesh.scene);
				})

				gltfLoader.load('./models/bronze_sword/scene.gltf',(bronze_sword) => {
					bronze_sword.scene.rotation.y = Math.PI / -1.3;
					bronze_sword.scene.rotation.x = Math.PI / 2-2.4;

					bronze_sword.scene.scale.set(0.03,0.03,0.03);
					bronze_sword.scene.position.set( -26, 0, 3);
					scene.add(bronze_sword.scene);
				})

				gltfLoader.load('./models/bronze_shield/scene.gltf',(bronze_shield) => {
					bronze_shield.scene.rotation.y = Math.PI / 2-5;
					bronze_shield.scene.scale.set(5,5,5);
					bronze_shield.scene.position.set( -27, 0, 3);
					scene.add(bronze_shield.scene);
				})

				

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

   //link the resize of the window to the update of the camera
   window.addEventListener( 'resize', MyResize);


















