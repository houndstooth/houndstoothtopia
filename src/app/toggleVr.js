import * as cameras from './cameras'
import vrEffect from './vrEffect'

const toggleVR = () => cameras.currentCamera === cameras.perspectiveCamera ? exitPresent() : enterPresent()

const exitPresent = () => {
    vrEffect.exitPresent().catch(() => {})
    cameras.currentCamera = cameras.orthographicCamera
}

const enterPresent = () => {
    vrEffect.requestPresent().catch(() => {})
    cameras.currentCamera = cameras.perspectiveCamera
}

export default toggleVR
