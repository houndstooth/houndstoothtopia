import {ELEVATION_EASING_TIME, ELEVATION_TIER_HEIGHT, AVERAGE_HUMAN_HEIGHT} from '../spacetime'
import {ease} from './easing'
import webVr from '../webVr'

let isChanging = false

const update = () => webVr.player.position.y = elevation.current

const change = newDirection => {
    if (isChanging) return
    const newTarget = precisionRound(elevation.current + ELEVATION_TIER_HEIGHT * newDirection, 1)
    if (newTarget < AVERAGE_HUMAN_HEIGHT) return
    isChanging = true

    ease(elevation, 'current', newTarget, ELEVATION_EASING_TIME, () => {
        elevation.current = precisionRound(elevation.current, 1)
        isChanging = false
    })
}

const precisionRound = (number, precision) => {
    const factor = Math.pow(10, precision)
    return Math.round(number * factor) / factor
}

const elevation = {
    current: AVERAGE_HUMAN_HEIGHT,
    change,
    update,
}

export default elevation
