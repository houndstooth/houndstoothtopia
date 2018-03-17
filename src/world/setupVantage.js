import {orthographicCamera} from '../app/cameras'
import {
    INITIAL_ORTHOGRAPHIC_POSITION,
    INITIAL_ORTHOGRAPHIC_TARGET,
    INITIAL_PLAYER_TARGET,
} from '../space'
import player from '../app/player'

const setupVantage = () => {
    player.lookAt(...INITIAL_PLAYER_TARGET)

    orthographicCamera.position.set(...INITIAL_ORTHOGRAPHIC_POSITION)
    orthographicCamera.lookAt(...INITIAL_ORTHOGRAPHIC_TARGET)
}

export default setupVantage
