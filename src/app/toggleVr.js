import * as cameras from './cameras'
import vrEffect from './vrEffect'

const toggleVR = () => vrEffect.isPresenting ? exitPresent() : enterPresent()

const exitPresent = () => {
    if (!vrEffect.isPresenting) return
    vrEffect.exitPresent()
    cameras.currentCamera = cameras.orthographicCamera
}

const enterPresent = () => {
    if (vrEffect.isPresenting) return
    vrEffect.requestPresent().catch(() => {})
    cameras.currentCamera = cameras.perspectiveCamera
}

export default toggleVR
