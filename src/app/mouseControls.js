import {OrbitControls} from 'threejs-full-es6'
import {currentCamera, orthographicCamera, perspectiveCamera} from './cameras'
import renderer from './renderer'
import vrEffect from './vrEffect'

// const mouseControls = {}

// WOW... even this doesn't work... what is preventing this from working?
const mouseControls = new OrbitControls(perspectiveCamera, renderer.domElement)
mouseControls.enableDamping = true
mouseControls.dampingFactor = .1

// let perspectiveMouseControls
// if (!vrEffect.hasVR) {
//     console.log('i tried to attach... is the problem we can only have one orbit control?')
//   perspectiveMouseControls = new OrbitControls(perspectiveCamera, renderer.domElement)
//   perspectiveMouseControls.enableDamping = true
//   perspectiveMouseControls.dampingFactor = 0.1
// }

// mouseControls.update = () => {
    // if (currentCamera === orthographicCamera) {
    //     mouseControls.update()
    // } else if (perspectiveMouseControls) {
    //     perspectiveMouseControls.update()
    // }
// }

export default mouseControls
