import {AudioListener} from 'threejs-full-es6'
import {perspectiveCamera} from '../app/cameras'

const listener = new AudioListener()
perspectiveCamera.add(listener)

export default listener
