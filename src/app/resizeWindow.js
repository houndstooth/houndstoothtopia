import {ORTHOGRAPHIC_DISTANCE} from '../space'
import renderer from './renderer'
import vrEffect from './vrEffect'
import * as cameras from './cameras'

const resizeWindow = () => {
        cameras.orthographicCamera.left = -ORTHOGRAPHIC_DISTANCE * window.innerWidth / window.innerHeight
        cameras.orthographicCamera.right = ORTHOGRAPHIC_DISTANCE * window.innerWidth / window.innerHeight

        vrEffect.setSize(window.innerWidth, window.innerHeight)

        renderer.domElement.style.width = `${window.innerWidth}px`
        renderer.domElement.style.height = `${window.innerHeight}px`

        Object.values(cameras).forEach(camera => {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
        })
}

export default resizeWindow
