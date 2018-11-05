import elevation from './elevation'
import locomotion from './locomotion'
import deleteItems from '../world/deleteItems'
import {addShowcaser,cycleShowcaser} from '../world/showcaser'

const KEY_ASCII_CODES = {
    W: 87,
    A: 65,
    S: 83,
    D: 68,
    Q: 81,
    E: 69,
    R: 82,
    F: 70,
    X: 88,
    Z: 90,
    C: 67,
}

const keyboard = {
    forward: false,
    backward: false,
    right: false,
    left: false,
    turnRight: false,
    turnLeft: false,
}

const startMoving = direction => {
    if (!keyboard[direction]) {
        keyboard[direction] = true
        locomotion.start(direction)
    }
}

const stopMoving = direction => {
    keyboard[direction] = false
    locomotion.stop(direction)
}

const onKeyDown = event => {
    switch (event.keyCode) {
        case KEY_ASCII_CODES.W:
            startMoving('forward')
            break
        case KEY_ASCII_CODES.A:
            startMoving('left')
            break
        case KEY_ASCII_CODES.S:
            startMoving('backward')
            break
        case KEY_ASCII_CODES.D:
            startMoving('right')
            break
        case KEY_ASCII_CODES.Q:
            startMoving('turnLeft')
            break
        case KEY_ASCII_CODES.E:
            startMoving('turnRight')
            break
        case KEY_ASCII_CODES.R:
            elevation.change(1)
            break
        case KEY_ASCII_CODES.F:
            elevation.change(-1)
            break
        case KEY_ASCII_CODES.X:
            deleteItems()
            addShowcaser()
            break
        case KEY_ASCII_CODES.Z:
            cycleShowcaser(-1)
            break
        case KEY_ASCII_CODES.C:
            cycleShowcaser(1)
            break
    }
}

const onKeyUp = event => {
    switch (event.keyCode) {
        case KEY_ASCII_CODES.W:
            stopMoving('forward')
            break
        case KEY_ASCII_CODES.A:
            stopMoving('left')
            break
        case KEY_ASCII_CODES.S:
            stopMoving('backward')
            break
        case KEY_ASCII_CODES.D:
            stopMoving('right')
            break
        case KEY_ASCII_CODES.Q:
            stopMoving('turnLeft')
            break
        case KEY_ASCII_CODES.E:
            stopMoving('turnRight')
            break
    }
}

const attachKeyboard = () => {
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)
}

export default attachKeyboard
