import player from './player'
import {ELEVATION_TIER_HEIGHT, HUMAN_HEIGHT, MOVEMENT_SPEED} from '../spacetime'

let target = HUMAN_HEIGHT
let direction = 0

const UP = 1
const DOWN = -1

const update = () => {
    const y = player.position.y

    if (direction === UP && y < target) {
        player.translateY(MOVEMENT_SPEED)
    } else if (direction === DOWN && y > target) {
        player.translateY(-MOVEMENT_SPEED)
    } else {
        direction = 0
    }
}

const change = newDirection => {
    if (alreadyChangingElevation()) return
    direction = newDirection
    target += ELEVATION_TIER_HEIGHT * newDirection
    if (target < HUMAN_HEIGHT) target = HUMAN_HEIGHT
}

const alreadyChangingElevation = () => direction !== 0

const elevation = {
    change,
    update,
}

export default elevation
