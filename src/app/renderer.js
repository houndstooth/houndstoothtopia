import {PCFSoftShadowMap, WebGLRenderer} from 'threejs-full-es6'

const DEFAULT_PIXEL_RATIO = 4

const renderer = new WebGLRenderer({antialias: true})
renderer.setPixelRatio(Math.min(window.devicePixelRatio, DEFAULT_PIXEL_RATIO))
renderer.setSize(window.innerWidth, window.innerHeight)
// renderer.shadowMap.enabled = true
// renderer.shadowMap.type = PCFSoftShadowMap;

export default renderer
