import vrControllers from 'three-vrcontroller-module'
import controllerMesh from '../world/controllerMesh'
import player from './player'
import vrControls from './vrControls'
import {MOVEMENT_SPEED} from '../space'
import {geometry} from '../world/geometry'

vrControllers.controllers = []
vrControllers.meshModelId = 0

window.addEventListener('vr controller connected', event => {
    const controller = event.detail
    player.add(controller)
    controller.standingMatrix = vrControls.getStandingMatrix()
    updateControllerMesh(controller)
    vrControllers.controllers.push(controller)

    controller.addEventListener('primary press began', e => e.target.movementSpeed = MOVEMENT_SPEED)
    controller.addEventListener('primary press ended', e => e.target.movementSpeed = 0)
})

vrControllers.cycleMeshes = () => {
    vrControllers.meshModelId++
    if (vrControllers.meshModelId === Object.keys(geometry).length - 1) {
        vrControllers.meshModelId = 0
    }

    vrControllers.controllers.forEach(updateControllerMesh)
}

const updateControllerMesh = controller => {
    if (controller.mesh) {
        controller.remove(controller.mesh)
        controller.mesh.geometry.dispose()
        controller.mesh.material.dispose()
    }

    const newMesh = controllerMesh(vrControllers.meshModelId)
    controller.add(newMesh)
    controller.mesh = newMesh
}

export default vrControllers
