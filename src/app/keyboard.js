import direction from './direction'
import player from './player'
import {MOVEMENT_SPEED} from '../space'
import vrControllers from './vrControllers'

const keyboard = {
    update: () => {
        if (keyboard.moveForward) direction.translateZ(MOVEMENT_SPEED)
        if (keyboard.moveBackward) direction.translateZ(-MOVEMENT_SPEED)
        if (keyboard.moveUp) direction.translateY(MOVEMENT_SPEED)
        if (keyboard.moveDown) direction.translateY(-MOVEMENT_SPEED)
        if (keyboard.moveLeft) direction.translateX(MOVEMENT_SPEED)
        if (keyboard.moveRight) direction.translateX(-MOVEMENT_SPEED)
        if (keyboard.turnRight) {
            player.rotateY(-MOVEMENT_SPEED)
            direction.rotateY(-MOVEMENT_SPEED)
        }
        if (keyboard.turnLeft) {
            player.rotateY(MOVEMENT_SPEED)
            direction.rotateY(MOVEMENT_SPEED)
        }
        if (keyboard.turnUp) {
            player.rotateX(-MOVEMENT_SPEED)
            direction.rotateX(-MOVEMENT_SPEED)
        }
        if (keyboard.turnDown) {
            player.rotateX(MOVEMENT_SPEED)
            direction.rotateX(MOVEMENT_SPEED)
        }
    }
}

const onKeyDown = event => {
    switch (event.keyCode) {
        case 87: // w
            keyboard.moveForward = true
            break
        case 65: // a
            keyboard.moveLeft = true
            break
        case 83: // s
            keyboard.moveBackward = true
            break
        case 68: // d
            keyboard.moveRight = true
            break
        case 82: // r
            keyboard.moveUp = true
            break
        case 70: // f
            keyboard.moveDown = true
            break
        case 37: // left
            keyboard.turnLeft = true
            break
        case 39: // right
            keyboard.turnRight = true
            break
        case 40: // down
            keyboard.turnDown = true
            break
        case 38: // up
            keyboard.turnUp = true
            break
        case 32: // space
            vrControllers.cycleMeshes()
    }
}

const onKeyUp = event => {
    switch (event.keyCode) {
        case 87: // w
            keyboard.moveForward = false
            break
        case 65: // a
            keyboard.moveLeft = false
            break
        case 83: // s
            keyboard.moveBackward = false
            break
        case 68: // d
            keyboard.moveRight = false
            break
        case 82: // r
            keyboard.moveUp = false
            break
        case 70: // f
            keyboard.moveDown = false
            break
        case 37: // left
            keyboard.turnLeft = false
            break
        case 39: // right
            keyboard.turnRight = false
            break
        case 40: // down
            keyboard.turnDown = false
            break
        case 38: // up
            keyboard.turnUp = false
            break
    }
}

window.addEventListener('keydown', onKeyDown)
window.addEventListener('keyup', onKeyUp)

export default keyboard
