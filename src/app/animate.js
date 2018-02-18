import player from './player'
import renderer from './renderer'
import scene from './scene'
import vrControls from './vrControls'
import vrControllers from './vrControllers'
import vrEffect from './vrEffect'
import * as state from './state'
import updateWorld from '../world/updateWorld'

const animate = () => {
    updateWorld()
    player.update()
    if (vrEffect.isPresenting) {
        vrControls.update()
        vrControllers.update()
    }
    if (!state.noVR) {
        vrEffect.render(scene, state.currentCamera)
    }
    if (vrEffect.isPresenting) renderer.render(scene, state.currentCamera)
}

export default animate
