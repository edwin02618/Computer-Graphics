import * as THREE from 'three'
import { OrbitControls } from "https://cdn.skypack.dev/three-stdlib@2.8.5/controls/OrbitControls";
//import Stats from 'three/examples/jsm/libs/stats.module'
import { GUI } from 'dat.gui'

const light = new THREE.SpotLight()
light.castShadow = true
light.shadow.mapSize.width = 512
light.shadow.mapSize.height = 512
light.shadow.camera.near = 0.5
light.shadow.camera.far = 100
scene.add(light)

//const helper = new THREE.SpotLightHelper(light)
const helper = new THREE.CameraHelper(light.shadow.camera)
scene.add(helper)

const data = {
    color: light.color.getHex(),
    mapsEnabled: true,
    shadowMapSizeWidth: 512,
    shadowMapSizeHeight: 512,
}

const gui = new GUI()
const lightFolder = gui.addFolder('THREE.Light')
lightFolder.addColor(data, 'color').onChange(() => {
    light.color.setHex(Number(data.color.toString().replace('#', '0x')))
})
lightFolder.add(light, 'intensity', 0, 1, 0.01)

const spotLightFolder = gui.addFolder('THREE.SpotLight')
spotLightFolder.add(light, 'distance', 0, 100, 0.01)
spotLightFolder.add(light, 'decay', 0, 4, 0.1)
spotLightFolder.add(light, 'angle', 0, 1, 0.1)
spotLightFolder.add(light, 'penumbra', 0, 1, 0.1)
spotLightFolder
    .add(light.shadow.camera, 'near', 0.1, 100)
    .onChange(() => light.shadow.camera.updateProjectionMatrix())
spotLightFolder
    .add(light.shadow.camera, 'far', 0.1, 100)
    .onChange(() => light.shadow.camera.updateProjectionMatrix())
spotLightFolder
    .add(data, 'shadowMapSizeWidth', [256, 512, 1024, 2048, 4096])
    .onChange(() => updateShadowMapSize())
spotLightFolder
    .add(data, 'shadowMapSizeHeight', [256, 512, 1024, 2048, 4096])
    .onChange(() => updateShadowMapSize())
spotLightFolder.add(light.position, 'x', -50, 50, 0.01)
spotLightFolder.add(light.position, 'y', -50, 50, 0.01)
spotLightFolder.add(light.position, 'z', -50, 50, 0.01)
spotLightFolder.open()

function updateShadowMapSize() {
    light.shadow.mapSize.width = data.shadowMapSizeWidth
    light.shadow.mapSize.height = data.shadowMapSizeHeight
    ;(light.shadow.map as any) = null
}

const meshesFolder = gui.addFolder('Meshes')
meshesFolder.add(data, 'mapsEnabled').onChange(() => {
    material.forEach((m) => {
        if (data.mapsEnabled) {
            m.map = texture
        } else {
            m.map = null
        }
        m.needsUpdate = true
    })
})