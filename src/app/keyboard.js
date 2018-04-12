import elevation from './elevation'
import locomotion from './locomotion'

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
        case KEYS.W:
            startMoving('forward')
            break
        case KEYS.A:
            startMoving('left')
            break
        case KEYS.S:
            startMoving('backward')
            break
        case KEYS.D:
            startMoving('right')
            break
        case KEYS.Q:
            startMoving('turnLeft')
            break
        case KEYS.E:
            startMoving('turnRight')
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
            stopMoving('forward')
            break
        case KEYS.A:
            stopMoving('left')
            break
        case KEYS.S:
            stopMoving('backward')
            break
        case KEYS.D:
            stopMoving('right')
            break
        case KEYS.Q:
            stopMoving('turnLeft')
            break
        case KEYS.E:
            stopMoving('turnRight')
            break
    }
}

window.addEventListener('keydown', onKeyDown)
window.addEventListener('keyup', onKeyUp)

export default keyboard
