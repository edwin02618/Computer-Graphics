import { OBJLoader } from './examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from './examples/jsm/loaders/MTLLoader.js';
import { GLTFLoader } from './examples/jsm/loaders/GLTFLoader.js';

let currentModel = null;

export function addModels(scene) {
  const mtlLoader = new MTLLoader();
  const gltfLoader = new GLTFLoader();

  function loadModel(model) {
    if (currentModel) {
      scene.remove(currentModel);
    }
    currentModel = model;
    scene.add(currentModel);
  }


  // Stone
  const stoneModels = {
    stoneSgeometry: {
      mtlPath: './models/stone_spear/stone_spear.mtl',
      objPath: './models/stone_spear/stone_spear.obj',
      rotation: { x: 0, y: Math.PI / 2 - 1.1, z: 0 },
      position: { x: 13, y: 6, z: -44 },
      scale: { x: 1, y: 1, z: 1 }
    },
    stone_knief: {
      gltfPath: './models/stone_knife/scene.gltf',
      rotation: { x: 0, y: Math.PI / 8, z: 0 },
      position: { x: 13, y: 6, z: -44 },
      scale: { x: 0.25, y: 0.25, z: 0.25 }
    },
    stoneBgeometry: {
      mtlPath: './models/stone_bow/uploads_files_1832926_bow.mtl',
      objPath: './models/stone_bow/uploads_files_1832926_bow.obj',
      rotation: { x: 0, y: Math.PI / 2 , z: 0 },
      position: { x: 11, y: 3, z: -44 },
      scale: { x: 1.5, y: 1.5, z: 1.5 }
    },
    stone_axe: {
      gltfPath: './models/stone_axe/scene.gltf',
      rotation: { x: Math.PI / 2, y: 0, z: Math.PI / 2 },
      position: { x: 13, y: 8, z: -44 },
      scale: { x: 0.3, y: 0.3, z: 0.3 }
    }
  };

  // Bronze
  const bronzeModels = {
    bronze_dagger: {
      gltfPath: './models/bronze_dagger/scene.gltf',
      rotation: { x: 0, y: Math.PI / 2, z: 0 },
      position: { x: 8, y: 8, z: -17 },
      scale: { x: 0.05, y: 0.05, z: 0.05 }
    },
    bronze_khopesh: {
      gltfPath: './models/bronze_khopesh/scene.gltf',
      rotation: { x: -Math.PI / 1.2 + 0.5, y: 0, z: 0.1 },
      position: { x: 8, y: 8, z: -17 },
      scale: { x: 0.1, y: 0.1, z: 0.1 }
    },
    bronze_sword: {
      gltfPath: './models/bronze_sword/scene.gltf',
      rotation: { x: -0.5, y: -Math.PI / 1.3, z: 0 },
      position: { x: 8, y: 7, z: -17 },
      scale: { x: 0.01, y: 0.01, z: 0.01 }
    },
    bronze_shield: {
      gltfPath: './models/bronze_shield/scene.gltf',
      rotation: { x: 0, y: Math.PI / 2 - 5, z: 0 },
      position: { x: 8, y: 6, z: -17 },
      scale: { x: 4.5, y: 4.5, z: 4.5 }
    }
  };

  // Iron
  const ironModels = {
    iron_spear: {
      gltfPath: './models/iron_spear/scene.gltf',
      rotation: { x: -Math.PI / 2, y: 0, z: 0 },
      position: { x: 16, y: 7, z: 6 },
      scale: { x: 0.04, y: 0.04, z: 0.04 }
    },
    iron_sword: {
      gltfPath: './models/iron_sword/scene.gltf',
      rotation: { x: 0, y: 0, z: -Math.PI / 2 },
      position: { x: 16, y: 5, z: 6 },
      scale: { x: 5, y: 5, z: 5 }
    },
    iron_axe: {
      gltfPath: './models/iron_axe/scene.gltf',
      rotation: { x: 0, y: -Math.PI / 2, z: 0 },
      position: { x: 16, y: 7, z: 6 },
      scale: { x: 0.01, y: 0.01, z: 0.01 }
    },
    iron_crossbow: {
      gltfPath: './models/iron_crossbow/scene.gltf',
      rotation: { x: -Math.PI / 2 + 2, y: 0, z: 0 },
      position: { x: 16, y: 6, z: 6 },
      scale: { x: 2, y: 2, z: 2 }
    }
  };

    // Load Stone Model
    const stoneModel = stoneModels.stoneSgeometry;
    mtlLoader.load(stoneModel.mtlPath, (materials) => {
      materials.preload();
  
      const objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.load(stoneModel.objPath, (object) => {
        object.rotation.set(stoneModel.rotation.x, stoneModel.rotation.y, stoneModel.rotation.z);
        object.position.set(stoneModel.position.x, stoneModel.position.y, stoneModel.position.z);
        object.scale.set(stoneModel.scale.x, stoneModel.scale.y, stoneModel.scale.z);
        loadModel(object);
      });
    });
  
    // Load Bronze Model
    // const bronzeModel = bronzeModels.bronze_dagger;
    // gltfLoader.load(bronzeModel.gltfPath, (gltf) => {
    //   const sceneObject = gltf.scene;
    //   sceneObject.rotation.set(bronzeModel.rotation.x, bronzeModel.rotation.y, bronzeModel.rotation.z);
    //   sceneObject.position.set(bronzeModel.position.x, bronzeModel.position.y, bronzeModel.position.z);
    //   sceneObject.scale.set(bronzeModel.scale.x, bronzeModel.scale.y, bronzeModel.scale.z);
    //   loadModel(sceneObject);
    // });
  
    // Load Iron Model
    // const ironModel = ironModels.iron_spear;
    // gltfLoader.load(ironModel.gltfPath, (gltf) => {
    //   const sceneObject = gltf.scene;
    //   sceneObject.rotation.set(ironModel.rotation.x, ironModel.rotation.y, ironModel.rotation.z);
    //   sceneObject.position.set(ironModel.position.x, ironModel.position.y, ironModel.position.z);
    //   sceneObject.scale.set(ironModel.scale.x, ironModel.scale.y, ironModel.scale.z);
    //   loadModel(sceneObject);
    // });

  gltfLoader.load('./models/modern_mosin_nagant_m91/scene.gltf',(m91) => {
    m91.scene.rotation.y = Math.PI / 2;
    m91.scene.rotation.x = +0.3
    m91.scene.scale.set(6,6,6);
    m91.scene.position.set( 6, 6, 31);
    scene.add(m91.scene);
  })

  function createControlBar() {
    const controlBar = document.createElement('div');
    controlBar.style.position = 'absolute';
    controlBar.style.top = '10px';
    controlBar.style.left = '10px';

    const stoneCategory = createCategory('Stone', stoneModels);
    const ironCategory = createCategory('Iron', ironModels);
    const bronzeCategory = createCategory('Bronze', bronzeModels);

    controlBar.appendChild(stoneCategory);
	  controlBar.appendChild(bronzeCategory);
    controlBar.appendChild(ironCategory);


    document.body.appendChild(controlBar);
  }



function createCategory(categoryName, models) {
  const categoryContainer = document.createElement('div');
  categoryContainer.style.marginBottom = '10px';

  const categoryTitle = document.createElement('h3');
  categoryTitle.textContent = categoryName;
  categoryTitle.style.color = 'white'; 
  categoryContainer.appendChild(categoryTitle);

  for (const modelName in models) {
    const model = models[modelName];
    const button = document.createElement('button');
    button.textContent = modelName;
    button.addEventListener('click', () => {
      const { gltfPath, mtlPath, objPath, rotation, position, scale } = model;

      if (gltfPath) {
        gltfLoader.load(gltfPath, (gltf) => {
          const sceneObject = gltf.scene;
          sceneObject.rotation.set(rotation.x, rotation.y, rotation.z);
          sceneObject.position.set(position.x, position.y, position.z);
          sceneObject.scale.set(scale.x, scale.y, scale.z);
          loadModel(sceneObject);
        });
      } else if (mtlPath && objPath) {
        mtlLoader.load(mtlPath, (materials) => {
          materials.preload();

          const objLoader = new OBJLoader();
          objLoader.setMaterials(materials);
          objLoader.load(objPath, (object) => {
            object.rotation.set(rotation.x, rotation.y, rotation.z);
            object.position.set(position.x, position.y, position.z);
            object.scale.set(scale.x, scale.y, scale.z);
            loadModel(object);
          });
        });
      }
    });

    categoryContainer.appendChild(button);
  }

  return categoryContainer;
}
  createControlBar();
}