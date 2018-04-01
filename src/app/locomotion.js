import TWEEN from '@tweenjs/tween.js/src/Tween'
import {MOVEMENT_EASING_TIME, MOVEMENT_SPEED, ROTATION_SPEED} from '../spacetime'
import player from './player'

const start = direction => tween(direction, 1)

const stop = direction => tween(direction, 0)

const tween = (direction, target) => {
    new TWEEN.Tween(locomotion)
        .to({[direction]: target}, MOVEMENT_EASING_TIME)
        .easing(TWEEN.Easing.Quintic.Out)
        .start()
}

const update = () => {
    TWEEN.update()
    if (locomotion.forward) {
        player.translateZ(-MOVEMENT_SPEED * locomotion.forward)
    }
    if (locomotion.backward) {
        player.translateZ(MOVEMENT_SPEED * locomotion.backward)
    }
    if (locomotion.right) {
        player.translateX(MOVEMENT_SPEED * locomotion.right)
    }
    if (locomotion.left) {
        player.translateX(-MOVEMENT_SPEED * locomotion.left)
    }
    if (locomotion.turnRight) {
        player.rotateY(-ROTATION_SPEED * locomotion.turnRight * 1.5)
    }
    if (locomotion.turnLeft) {
        player.rotateY(ROTATION_SPEED * locomotion.turnLeft * 1.5)
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
