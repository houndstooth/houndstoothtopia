import {OrbitControls} from 'threejs-full-es6'
import {currentCamera, orthographicCamera, perspectiveCamera} from './cameras'
import renderer from './renderer'

const mouseControls = {}

const controlsA = new OrbitControls(orthographicCamera, renderer.domElement);
controlsA.enableDamping = true;
controlsA.dampingFactor = .1;

const controlsB = new OrbitControls(perspectiveCamera, renderer.domElement);
controlsB.enableDamping = true;
controlsB.dampingFactor = 0.1;

mouseControls.update = () => {
  if (currentCamera === orthographicCamera) {
    controlsA.update()
  } else {
    controlsB.update()
  }
}

export default mouseControls
