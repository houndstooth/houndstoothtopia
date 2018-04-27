import songLoop from './songLoop'
import {buildVoices} from './voices'
import {buildEntities} from './entities'

const startSong = () => {
    buildVoices()
    buildEntities()
    songLoop()
}

export default startSong
