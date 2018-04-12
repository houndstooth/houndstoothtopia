import {OrbitControls} from 'threejs-full-es6'
import {currentCamera, orthographicCamera} from './cameras'
import renderer from './renderer'

const mouseControls = {}

const orthographicMouseControls = new OrbitControls(orthographicCamera, renderer.domElement)
orthographicMouseControls.enableDamping = true
orthographicMouseControls.dampingFactor = .1

mouseControls.update = () => {
    if (currentCamera === orthographicCamera) orthographicMouseControls.update()
}

export default mouseControls
