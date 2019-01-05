import { buildVrb } from 'vrb'
import scene from './world/scene'
import { onControllerConnected } from './world/controllerMesh'
import { enablePerformanceTesting } from './performance'
import {
    INITIAL_ORTHOGRAPHIC_POSITION,
    INITIAL_ORTHOGRAPHIC_TARGET,
    ORTHOGRAPHIC_FRUSTUM_FAR,
    ORTHOGRAPHIC_FRUSTUM_NEAR,
    PERSPECTIVE_FRUSTUM_FAR,
} from './spacetime'
import onAnimate from './onAnimate'

const camerasConfig = {
    ORTHOGRAPHIC_FRUSTUM_FAR,
    ORTHOGRAPHIC_FRUSTUM_NEAR,
    INITIAL_ORTHOGRAPHIC_POSITION,
    INITIAL_ORTHOGRAPHIC_TARGET,
    PERSPECTIVE_FRUSTUM_FAR,
}

const viewer = document.querySelector('#viewer')

const webVr = buildVrb({ camerasConfig, scene, onAnimate, onControllerConnected, viewer })

if (process.env.NODE_ENV === 'development') enablePerformanceTesting(webVr)

export default webVr
