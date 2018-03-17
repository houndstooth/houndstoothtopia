import * as cameras from './cameras'
import vrEffect from './vrEffect'

const toggleVR = () => vrEffect.isPresenting ? exitPresent() : enterPresent()

const exitPresent = () => {
    vrEffect.exitPresent()
    cameras.currentCamera = cameras.orthographicCamera
}

const enterPresent = () => {
    vrEffect.requestPresent().catch(() => {})
    cameras.currentCamera = cameras.perspectiveCamera
}

export default toggleVR
