import vrControllers from 'three-vrcontroller-module'
import controllerMesh from '../world/controllerMesh'
import player from './player'
import vrControls from './vrControls'
import {MOVEMENT_SPEED} from '../space'

vrControllers.meshes = []

window.addEventListener('vr controller connected', event => {
    const controller = event.detail
    player.add(controller)
    controller.standingMatrix = vrControls.getStandingMatrix()
    controller.add(controllerMesh())
    vrControllers.meshes.push(controller)

    controller.addEventListener('primary press began', e => e.target.movementSpeed = MOVEMENT_SPEED)
    controller.addEventListener('primary press ended', e => e.target.movementSpeed = 0)
})

export default vrControllers
