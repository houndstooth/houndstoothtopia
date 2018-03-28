import {Object3D} from 'threejs-full-es6'
import {perspectiveCamera} from './cameras'
import scene from './scene'

const player = new Object3D()
player.add(perspectiveCamera)
scene.add(player)

export default player
