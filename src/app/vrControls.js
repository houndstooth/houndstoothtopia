import {VRControls} from 'threejs-full-es6'
import {perspectiveCamera} from './cameras'
import vrEffect from './vrEffect'

let vrControls = {}

if (vrEffect.hasVR) {
  vrControls = new VRControls(perspectiveCamera)
  vrControls.standing = true
}


export default vrControls
