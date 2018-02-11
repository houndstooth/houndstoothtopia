import player from './player'
import renderer from './renderer'
import scene from './scene'
import vrControls from './vrControls'
import vrControllers from './vrControllers'
import vrEffect from './vrEffect'
import * as state from './state'
import updateWorld from '../world/updateWorld'

const animate = () => {
    vrEffect.requestAnimationFrame(animate)
    updateWorld()
    if (vrEffect.isPresenting) {
        player.update()
        vrControls.update()
        vrControllers.update()
    }
    vrEffect.render(scene, state.currentCamera)
    if (vrEffect.isPresenting) renderer.render(scene, state.currentCamera)
}

export default animate
