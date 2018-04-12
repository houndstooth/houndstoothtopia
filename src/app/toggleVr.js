import * as cameras from './cameras'
import vrEffect from './vrEffect'
import noop from './noop'

const toggleVR = () => cameras.currentCamera === cameras.perspectiveCamera ? exitPresent() : enterPresent()

const exitPresent = () => {
    vrEffect.exitPresent().catch(noop)
    cameras.currentCamera = cameras.orthographicCamera
}

const enterPresent = () => {
    vrEffect.requestPresent().catch(noop)
    cameras.currentCamera = cameras.perspectiveCamera
}

export default toggleVR
