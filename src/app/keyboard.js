import player from './player'
import {MOVEMENT_SPEED, ROTATION_SPEED} from '../space'
import elevation from './elevation'

const KEYS = {
    W: 87,
    A: 65,
    S: 83,
    D: 68,
    Q: 81,
    E: 69,
    R: 82,
    F: 70,
}

const keyboard = {
    update: () => {
        if (keyboard.moveForward) player.translateX(MOVEMENT_SPEED)
        if (keyboard.moveBackward) player.translateX(-MOVEMENT_SPEED)
        if (keyboard.moveRight) player.translateZ(MOVEMENT_SPEED)
        if (keyboard.moveLeft) player.translateZ(-MOVEMENT_SPEED)
        if (keyboard.turnRight) player.rotateY(-ROTATION_SPEED)
        if (keyboard.turnLeft) player.rotateY(ROTATION_SPEED)
    }
}

const onKeyDown = event => {
    switch (event.keyCode) {
        case KEYS.W:
            keyboard.moveForward = true
            break
        case KEYS.A:
            keyboard.moveLeft = true
            break
        case KEYS.S:
            keyboard.moveBackward = true
            break
        case KEYS.D:
            keyboard.moveRight = true
            break
        case KEYS.Q:
            keyboard.turnLeft = true
            break
        case KEYS.E:
            keyboard.turnRight = true
            break
        case KEYS.R:
            elevation.change(1)
            break
        case KEYS.F:
            elevation.change(-1)
            break
    }
}

const onKeyUp = event => {
    switch (event.keyCode) {
        case KEYS.W:
            keyboard.moveForward = false
            break
        case KEYS.A:
            keyboard.moveLeft = false
            break
        case KEYS.S:
            keyboard.moveBackward = false
            break
        case KEYS.D:
            keyboard.moveRight = false
            break
        case KEYS.Q:
            keyboard.turnLeft = false
            break
        case KEYS.E:
            keyboard.turnRight = false
            break
    }
}

window.addEventListener('keydown', onKeyDown)
window.addEventListener('keyup', onKeyUp)

export default keyboard
