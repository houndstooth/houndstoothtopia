import {orthographicCamera, perspectiveCamera} from '../app/cameras'
import {
    INITIAL_ORTHOGRAPHIC_POSITION,
    INITIAL_ORTHOGRAPHIC_TARGET,
    INITIAL_PERSPECTIVE_POSITION,
    INITIAL_PERSPECTIVE_TARGET,
} from '../spacetime'
import player from '../app/player'

const setupVantage = () => {
    player.position.set(...INITIAL_PERSPECTIVE_POSITION)
    player.lookAt(...INITIAL_PERSPECTIVE_TARGET)

    perspectiveCamera.lookAt(...INITIAL_PERSPECTIVE_TARGET)

    orthographicCamera.position.set(...INITIAL_ORTHOGRAPHIC_POSITION)
    orthographicCamera.lookAt(...INITIAL_ORTHOGRAPHIC_TARGET)
}

export default setupVantage
