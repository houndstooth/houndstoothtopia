import {orthographicCamera, perspectiveCamera} from './cameras'
import * as state from './state'
import vrEffect from './vrEffect'

const toggleVR = () => vrEffect.isPresenting ? exitPresent() : enterPresent()

const exitPresent = () => {
    if (!vrEffect.isPresenting) return
    vrEffect.exitPresent()
    state.currentCamera = orthographicCamera
}

const enterPresent = () => {
    if (vrEffect.isPresenting) return
    vrEffect.requestPresent()
    state.currentCamera = perspectiveCamera
}

export default toggleVR
