import * as cameras from './cameras'
import vrEffect from './vrEffect'

const toggleVR = () => cameras.currentCamera === cameras.perspectiveCamera ? exitPresent() : enterPresent()

const exitPresent = () => {
    if (vrEffect.hasVR) {
        vrEffect.exitPresent()
    } else {
      vrEffect.isPresenting = false
    }
    cameras.currentCamera = cameras.orthographicCamera
}

const enterPresent = () => {
    if (vrEffect.hasVR) {
        vrEffect.requestPresent()
    } else {
      vrEffect.isPresenting = true
    }
    cameras.currentCamera = cameras.perspectiveCamera
}

export default toggleVR
