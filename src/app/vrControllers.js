import vrControllers from 'three-vrcontroller-module'
import controllerMesh from '../world/controllerMesh'
import player from './player'
import vrControls from './vrControls'

vrControllers.controllers = []
vrControllers.meshGeometryIndex = 0

window.addEventListener('vr controller connected', event => {
    const controller = event.detail
    player.add(controller)
    controller.standingMatrix = vrControls.getStandingMatrix()
    updateControllerMesh(controller)
    vrControllers.controllers.push(controller)

    controller.addEventListener('thumbpad press began', vrControllers.cycleMeshes)
})

vrControllers.cycleMeshes = () => {
    vrControllers.meshGeometryIndex++
    vrControllers.controllers.forEach(updateControllerMesh)
}

const updateControllerMesh = controller => {
    if (controller.mesh) {
        controller.remove(controller.mesh)
        controller.mesh.geometry.dispose()
        controller.mesh.material.dispose()
    }

    const newMesh = controllerMesh(vrControllers.meshGeometryIndex)
    controller.add(newMesh)
    controller.mesh = newMesh
}

export default vrControllers
