import {Object3D} from 'threejs-full-es6'
import {perspectiveCamera} from './cameras'
import scene from './scene'
import keyboard from './keyboard'

const player = new Object3D()
player.add(perspectiveCamera)
scene.add(player)

player.update = () => {
    keyboard.update()
    if (player.position.y < 0) player.position.setY(0)
}

export default player
