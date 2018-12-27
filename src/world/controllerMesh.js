import {Mesh, MeshLambertMaterial} from 'three'
import geometryData from './geometryData'
import {CONTROLLER_COLOR} from '../color'
import {CONTROLLER_SCALE} from '../spacetime'
import idealMeshCycle from './idealMeshCycle'
import wrappedIndex from '../utilities/wrappedIndex'

const CONTROLLER_ROTATION = [0, Math.PI / 4, 0]

const controllerMesh = index => {
    const mesh = new Mesh(
        geometryData.geometry[wrappedIndex(idealMeshCycle, index)],
        new MeshLambertMaterial({color: CONTROLLER_COLOR}),
    )
    mesh.rotation.set(...CONTROLLER_ROTATION)
    mesh.scale.set(...CONTROLLER_SCALE)

    return mesh
}

const updateControllerMesh = controller => {
    if (controller.mesh) {
        controller.remove(controller.mesh)
        controller.mesh.geometry.dispose()
        controller.mesh.material.dispose()
    }

    const newMesh = controllerMesh(controller.meshGeometryIndex)
    controller.add(newMesh)
    controller.mesh = newMesh
}

const cycleMesh = event => {
    const controller = event.target
    controller.meshGeometryIndex += controller.cyclingDirection
    updateControllerMesh(controller)
}

const setCyclingDirection = event => event.target.cyclingDirection = event.axes[0] < 0 ? -1 : 1

const onControllerConnected = controller => {
    updateControllerMesh(controller)
    controller.addEventListener('thumbpad axes changed', setCyclingDirection)
    controller.addEventListener('thumbpad press began', cycleMesh)
}

export {
    onControllerConnected
}
