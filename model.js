import { OBJLoader } from './examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from './examples/jsm/loaders/MTLLoader.js';
import { GLTFLoader } from './examples/jsm/loaders/GLTFLoader.js';

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
    position: { x: 13, y: 7, z: -44 },
    scale: { x: 0.15, y: 0.15, z: 0.15 }
  },
  stoneBgeometry: {
    mtlPath: './models/stone_bow/uploads_files_1832926_bow.mtl',
    objPath: './models/stone_bow/uploads_files_1832926_bow.obj',
    rotation: { x: 0, y: Math.PI / 2, z: 0 },
    position: { x: 11, y: 3, z: -44 },
    scale: { x: 1.5, y: 1.5, z: 1.5 }
  },
  stone_axe: {
    gltfPath: './models/stone_axe/scene.gltf',
    rotation: { x: Math.PI / 2, y: 0, z: Math.PI / 2 },
    position: { x: 13, y: 8, z: -44 },
    scale: { x: 0.2, y: 0.2, z: 0.2 }
  }
};

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

const modernModels = {
  modern_mosin_nagant_m91: {
    gltfPath: './models/modern_mosin_nagant_m91/scene.gltf',
    rotation: { x: 0.3, y: Math.PI / 2, z: 0 },
    position: { x: 6, y: 6, z: 31 },
    scale: { x: 5, y: 5, z: 5 }
  },
  modern_remington: {
    gltfPath: './models/modern_remington/scene.gltf',
    rotation: { x: 0, y: Math.PI / 2 + 2, z: 0 },
    position: { x: 6, y: 6, z: 31 },
    scale: { x: 4, y: 4, z: 4 }
  },
  modern_tac_force_knife: {
    gltfPath: './models/modern_tac_force_knife/scene.gltf',
    rotation: { x: 0, y: Math.PI / 2 + 2, z: 0 },
    position: { x: 6, y: 7.5, z: 31 },
    scale: { x: 2, y: 2, z: 2 }
  },
  modern_tomahawk: {
    gltfPath: './models/modern_tomahawk/scene.gltf',
    rotation: { x: 0, y: 0, z: 0 },
    position: { x: 6, y: 6.5, z: 31 },
    scale: { x: 0.003, y: 0.003, z: 0.003 }
  }
};



export function addModels(scene) {
  const mtlLoader = new MTLLoader();
  const gltfLoader = new GLTFLoader();

  // Create container for buttons and model names
  const container = document.createElement('div');
  container.className = 'container';
  document.body.appendChild(container);

  // Stone button
  const stoneButton = document.createElement('button');
  stoneButton.innerText = 'Stone';
  container.appendChild(stoneButton);

  // Stone name and year
  const stoneName = document.createElement('span');
  stoneName.className = 'modelName';
  stoneName.style.color = 'white';
  container.appendChild(stoneName);

  const stoneYear = document.createElement('span');
  stoneYear.className = 'modelYear';
  stoneYear.style.color = 'white';
  container.appendChild(stoneYear);

  // Bronze button
  const bronzeButton = document.createElement('button');
  bronzeButton.innerText = 'Bronze';
  container.appendChild(bronzeButton);

  // Bronze name and year
  const bronzeName = document.createElement('span');
  bronzeName.className = 'modelName';
  bronzeName.style.color = 'white';
  container.appendChild(bronzeName);

  const bronzeYear = document.createElement('span');
  bronzeYear.className = 'modelYear';
  bronzeYear.style.color = 'white';
  container.appendChild(bronzeYear);

  // Iron button
  const ironButton = document.createElement('button');
  ironButton.innerText = 'Iron';
  container.appendChild(ironButton);

  // Iron name and year
  const ironName = document.createElement('span');
  ironName.className = 'modelName';
  ironName.style.color = 'white';
  container.appendChild(ironName);

  const ironYear = document.createElement('span');
  ironYear.className = 'modelYear';
  ironYear.style.color = 'white';
  container.appendChild(ironYear);

  // Modern button
  const modernButton = document.createElement('button');
  modernButton.innerText = 'Modern';
  container.appendChild(modernButton);

  // Modern name and year
  const modernName = document.createElement('span');
  modernName.className = 'modelName';
  modernName.style.color = 'white';
  container.appendChild(modernName);

  const modernYear = document.createElement('span');
  modernYear.className = 'modelYear';
  modernYear.style.color = 'white';
  container.appendChild(modernYear);

  // Model index variables
  let stoneModelIndex = 0;
  const stoneModelsArray = Object.keys(stoneModels);

  let bronzeModelIndex = 0;
  const bronzeModelsArray = Object.keys(bronzeModels);

  let ironModelIndex = 0;
  const ironModelsArray = Object.keys(ironModels);

  let modernModelIndex = 0;
  const modernModelsArray = Object.keys(modernModels);

  // Stone button event listener
  stoneButton.addEventListener('click', () => {
    const model = stoneModelsArray[stoneModelIndex];
    loadModel(stoneModels[model], 'stoneModel');
    stoneName.innerText = model;
    stoneModelIndex = (stoneModelIndex + 1) % stoneModelsArray.length;
  });

  // Bronze button event listener
  bronzeButton.addEventListener('click', () => {
    const model = bronzeModelsArray[bronzeModelIndex];
    loadModel(bronzeModels[model], 'bronzeModel');
    bronzeName.innerText = model;
    bronzeModelIndex = (bronzeModelIndex + 1) % bronzeModelsArray.length;
  });

  // Iron button event listener
  ironButton.addEventListener('click', () => {
    const model = ironModelsArray[ironModelIndex];
    loadModel(ironModels[model], 'ironModel');
    ironName.innerText = model;
    ironModelIndex = (ironModelIndex + 1) % ironModelsArray.length;
  });

  // Modern button event listener
  modernButton.addEventListener('click', () => {
    const model = modernModelsArray[modernModelIndex];
    loadModel(modernModels[model], 'modernModel');
    modernName.innerText = model;
    modernModelIndex = (modernModelIndex + 1) % modernModelsArray.length;
  });

  // Set CSS styles for the container
  container.style.position = 'absolute';
  container.style.top = '10px';
  container.style.left = '10px';

  // Load the initial stone model
  const initialStoneModel = stoneModelsArray[stoneModelIndex];
  loadModel(stoneModels[initialStoneModel], 'stoneModel');
  stoneName.innerText = initialStoneModel;
  stoneYear.innerText = ', StartingYear:3300BCE ';
  stoneModelIndex = (stoneModelIndex + 1) % stoneModelsArray.length;

  // Load the initial bronze model
  const initialBronzeModel = bronzeModelsArray[bronzeModelIndex];
  loadModel(bronzeModels[initialBronzeModel], 'bronzeModel');
  bronzeName.innerText = initialBronzeModel;
  bronzeYear.innerText = ', Starting ear:1200BC ';
  bronzeModelIndex = (bronzeModelIndex + 1) % bronzeModelsArray.length;

  // Load the initial iron model
  const initialIronModel = ironModelsArray[ironModelIndex];
  loadModel(ironModels[initialIronModel], 'ironModel');
  ironName.innerText = initialIronModel;
  ironYear.innerText = ', StartingYear:600BC ';
  ironModelIndex = (ironModelIndex + 1) % ironModelsArray.length;

  // Load the initial modern model
  const initialModernModel = modernModelsArray[modernModelIndex];
  loadModel(modernModels[initialModernModel], 'modernModel');
  modernName.innerText = initialModernModel;
  modernYear.innerText = ', StartingYear:1364 ';
  modernModelIndex = (modernModelIndex + 1) % modernModelsArray.length;

  function loadModel(modelData, modelName) {
    // Remove existing models of the same category
    const categoryModels = scene.children.filter(child => child.name.startsWith(modelName.split('_')[0]));
    categoryModels.forEach(categoryModel => scene.remove(categoryModel));

    if (modelData.gltfPath) {
      gltfLoader.load(modelData.gltfPath, (gltf) => {
        const model = gltf.scene;
        model.name = modelName;
        model.position.copy(modelData.position);
        model.rotation.set(modelData.rotation.x, modelData.rotation.y, modelData.rotation.z);
        model.scale.set(modelData.scale.x, modelData.scale.y, modelData.scale.z);
        scene.add(model);
      });
    } else {
      mtlLoader.load(modelData.mtlPath, (materials) => {
        materials.preload();
        const objLoader = new OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.load(modelData.objPath, (obj) => {
          const model = obj;
          model.name = modelName;
          model.position.copy(modelData.position);
          model.rotation.set(modelData.rotation.x, modelData.rotation.y, modelData.rotation.z);
          model.scale.set(modelData.scale.x, modelData.scale.y, modelData.scale.z);
          scene.add(model);
        });
      });
    }
  }
}

