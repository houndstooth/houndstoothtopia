import {Object3D} from 'threejs-full-es6'
import {perspectiveCamera} from './cameras'
import scene from './scene'
import vrControllers from './vrControllers'
import keyboard from './keyboard'
import direction from './direction'

const player = new Object3D()
player.add(perspectiveCamera)
scene.add(player)

player.update = () => {
    if (vrControllers.meshes) {
        vrControllers.meshes.forEach(controller => {
            if (controller.movementSpeed) {
                direction.quaternion.copy(controller.quaternion)
                direction.translateZ(-controller.movementSpeed)
            }
        })
    }
    keyboard.update()
    if (direction.position.y < 0) direction.position.setY(0)
    player.position.copy(direction.position)
}

export default player
