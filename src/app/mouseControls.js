import {OrbitControls} from 'threejs-full-es6'
import {currentCamera, orthographicCamera, perspectiveCamera} from './cameras'
import renderer from './renderer'

const mouseControls = {}

const orthographicMouseControls = new OrbitControls(orthographicCamera, renderer.domElement)
orthographicMouseControls.enableDamping = true
orthographicMouseControls.dampingFactor = .1

const perpsectiveMouseControls = new OrbitControls(perspectiveCamera, renderer.domElement)
perpsectiveMouseControls.enableDamping = true
perpsectiveMouseControls.dampingFactor = 0.1

mouseControls.update = () => {
    if (currentCamera === orthographicCamera) {
        orthographicMouseControls.update()
    } else {
        perpsectiveMouseControls.update()
    }
}

export default mouseControls
