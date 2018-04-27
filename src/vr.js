import webVr from 'webvr' // so this could be the thing that would be a completely external dependency
import locomotion from './navigation/locomotion'
import easing from './navigation/easing'
import elevation from './navigation/elevation'
import scene from './world/scene'
import updateWorld from './world/updateWorld'
import performanceTest from './performance/performanceTest'
import {onControllerConnected} from './world/controllerMesh'
import {
    ORTHOGRAPHIC_FRUSTUM_BOTTOM,
    ORTHOGRAPHIC_FRUSTUM_FAR,
    ORTHOGRAPHIC_FRUSTUM_LEFT,
    ORTHOGRAPHIC_FRUSTUM_NEAR,
    ORTHOGRAPHIC_FRUSTUM_RIGHT,
    ORTHOGRAPHIC_FRUSTUM_TOP,
    PERSPECTIVE_ASPECT_RATIO,
    PERSPECTIVE_FOV,
    PERSPECTIVE_FRUSTUM_FAR,
    PERSPECTIVE_FRUSTUM_NEAR,
    INITIAL_ORTHOGRAPHIC_POSITION,
    INITIAL_ORTHOGRAPHIC_TARGET,
    INITIAL_PERSPECTIVE_POSITION,
    INITIAL_PERSPECTIVE_TARGET,
    ORTHOGRAPHIC_DISTANCE,
} from './spacetime'

const camerasConfig = {
    ORTHOGRAPHIC_FRUSTUM_BOTTOM,
    ORTHOGRAPHIC_FRUSTUM_FAR,
    ORTHOGRAPHIC_FRUSTUM_LEFT,
    ORTHOGRAPHIC_FRUSTUM_NEAR,
    ORTHOGRAPHIC_FRUSTUM_RIGHT,
    ORTHOGRAPHIC_FRUSTUM_TOP,
    PERSPECTIVE_ASPECT_RATIO,
    PERSPECTIVE_FOV,
    PERSPECTIVE_FRUSTUM_FAR,
    PERSPECTIVE_FRUSTUM_NEAR,
    INITIAL_ORTHOGRAPHIC_POSITION,
    INITIAL_ORTHOGRAPHIC_TARGET,
    INITIAL_PERSPECTIVE_POSITION,
    INITIAL_PERSPECTIVE_TARGET,
    ORTHOGRAPHIC_DISTANCE,
}

const toggle = document.querySelector('#toggle')
const viewer = document.querySelector('#viewer')

const vr = webVr({
    camerasConfig,
    scene,
    onControllerConnected,
    onAnimate: () => {
        process.env.PERFORMANCE_TEST && performanceTest.update()
        easing.update()
        locomotion.update()
        elevation.update()
        updateWorld()
    },
    toggle,
    viewer,
})

export default vr
