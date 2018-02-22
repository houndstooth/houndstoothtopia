import player from './player'
import renderer from './renderer'
import scene from './scene'
import vrControls from './vrControls'
import vrControllers from './vrControllers'
import vrEffect from './vrEffect'
import {currentCamera} from './cameras'
import updateWorld from '../world/updateWorld'
import updateSong from '../audio/updateSong'

const animate = () => {
    updateWorld()
    updateSong()
    player.update()
    if (vrEffect.isPresenting) {
        vrControls.update()
        vrControllers.update()
    }
    vrEffect.render(scene, currentCamera)
    if (vrEffect.isPresenting) renderer.render(scene, currentCamera)
}

export default animate
