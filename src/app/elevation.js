import player from './player'
import {MOVEMENT_SPEED} from '../space'

let target = 0
let direction = 0

const update = () => {
    const y = player.position.y

    if (direction === 1 && y < target) {
        player.translateY(MOVEMENT_SPEED)
    } else if (direction === -1 && y > target) {
        player.translateY(-MOVEMENT_SPEED)
    } else {
        direction = 0
    }
}

const change = newDirection => {
    if (direction !== 0) return
    direction = newDirection
    target += 10 * newDirection
    if (target < 0) target = 0
}

const elevation = {
    change,
    update,
}

export default elevation
