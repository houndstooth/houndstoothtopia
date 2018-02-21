import * as cameras from './cameras'
import renderer from './renderer'
import resizeWindow from './resizeWindow'
import toggleVR from './toggleVr'

const prepareViewer = () => {
    cameras.currentCamera = cameras.orthographicCamera

    document.querySelector('#viewer').appendChild(renderer.domElement)

    document.querySelector('#toggle').onclick = toggleVR

    window.addEventListener('resize', resizeWindow)
}

export default prepareViewer
