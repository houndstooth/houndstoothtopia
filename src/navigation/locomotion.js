import {MOVEMENT_EASING_TIME, MOVEMENT_SPEED, ROTATION_SPEED} from '../spacetime'
import {ease} from './easing'
import webVr from '../webVr'

const start = direction => ease(locomotion, direction, 1, MOVEMENT_EASING_TIME)

const stop = direction => ease(locomotion, direction, 0, MOVEMENT_EASING_TIME)

const update = () => {
    if (locomotion.forward) {
        webVr.player.translateZ(-MOVEMENT_SPEED * locomotion.forward)
    }
    if (locomotion.backward) {
        webVr.player.translateZ(MOVEMENT_SPEED * locomotion.backward)
    }
    if (locomotion.right) {
        webVr.player.translateX(MOVEMENT_SPEED * locomotion.right)
    }
    if (locomotion.left) {
        webVr.player.translateX(-MOVEMENT_SPEED * locomotion.left)
    }
    if (locomotion.turnRight) {
        webVr.player.rotateY(-ROTATION_SPEED * locomotion.turnRight * 1.5)
    }
    if (locomotion.turnLeft) {
        webVr.player.rotateY(ROTATION_SPEED * locomotion.turnLeft * 1.5)
    }
}

const locomotion = {
    forward: 0,
    backward: 0,
    right: 0,
    left: 0,
    turnRight: 0,
    turnLeft: 0,
    start,
    stop,
    update,
}

export default locomotion
