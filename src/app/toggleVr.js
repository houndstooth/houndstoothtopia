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
    try {
        vrEffect.requestPresent()
    } catch(e) {
        state.noVR = true
    }
    state.currentCamera = perspectiveCamera

    /*
    // try {
        vrEffect.requestPresent().catch(() => {
        console.log('caught')
            state.noVR = true
        }).then(() => {
        console.log('still omre stuf to do')
        state.currentCamera = perspectiveCamera
        })
    // } catch(e) {
    //
    // }
     */
}

export default toggleVR
