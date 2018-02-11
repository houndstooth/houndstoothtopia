import {orthographicCamera} from './cameras'
import renderer from './renderer'
import resizeWindow from './resizeWindow'
import * as state from './state'
import toggleVR from './toggleVr'

const prepareViewer = () => {
    state.currentCamera = orthographicCamera

    document.querySelector('#viewer').appendChild(renderer.domElement)

    document.querySelector('#toggle').onclick = toggleVR

    window.addEventListener('resize', resizeWindow)
}

export default prepareViewer
