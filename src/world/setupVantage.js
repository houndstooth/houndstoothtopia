import {orthographicCamera, perspectiveCamera} from '../app/cameras'
import {
    INITIAL_ORTHOGRAPHIC_POSITION,
    INITIAL_ORTHOGRAPHIC_TARGET,
    INITIAL_PERSPECTIVE_POSITION,
    INITIAL_PERSPECTIVE_TARGET,
} from '../spacetime'

const setupVantage = () => {
    perspectiveCamera.position.set(...INITIAL_PERSPECTIVE_POSITION)
    perspectiveCamera.lookAt(...INITIAL_PERSPECTIVE_TARGET)

    orthographicCamera.position.set(...INITIAL_ORTHOGRAPHIC_POSITION)
    orthographicCamera.lookAt(...INITIAL_ORTHOGRAPHIC_TARGET)
}

export default setupVantage
