import {VREffect} from 'threejs-full-es6'
import renderer from './renderer'

let vrEffect = {}

const hasVR = navigator.getVRDisplays !== undefined

if (hasVR) {
  vrEffect = new VREffect(renderer)
  vrEffect.hasVR = true
}

export default vrEffect
