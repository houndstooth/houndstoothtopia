import {entities} from './entities'

let time = 0

const songLoop = () => {
    requestAnimationFrame(songLoop)
    time++
    entities.forEach(entity => entity.update(time))
}

export default songLoop
