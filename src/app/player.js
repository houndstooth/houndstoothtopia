import {Object3D} from 'threejs-full-es6'
import {perspectiveCamera} from './cameras'
import scene from './scene'
import vrControllers from './vrControllers'

const player = new Object3D()
player.add(perspectiveCamera)
scene.add(player)

const direction = new Object3D()
scene.add(direction)

player.update = () => {
    if (vrControllers.meshes) {
        vrControllers.meshes.forEach(controller => {
            direction.quaternion.copy(controller.quaternion)
            direction.translateZ(-controller.movementSpeed || 0)
        })
    }
    if (direction.position.y < 0) direction.position.setY(0)
    player.position.copy(direction.position)
}

export default player
