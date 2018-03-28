import elevation from './elevation'
import renderer from './renderer'
import scene from './scene'
import mouseControls from './mouseControls'
import vrControls from './vrControls'
import vrControllers from './vrControllers'
import vrEffect from './vrEffect'
import {currentCamera} from './cameras'
import updateWorld from '../world/updateWorld'
import locomotion from './locomotion'

const animate = () => {
    updateWorld()
    locomotion.update()
    mouseControls.update()
    elevation.update()
    if (vrEffect.isPresenting) {
        vrControls.update()
        vrControllers.update()
    }
    vrEffect.render(scene, currentCamera)
    if (vrEffect.isPresenting) renderer.render(scene, currentCamera)
}

export default animate
