import {VRControls} from 'threejs-full-es6'
import {perspectiveCamera} from './cameras'

const vrControls = new VRControls(perspectiveCamera)
vrControls.standing = true

export default vrControls
