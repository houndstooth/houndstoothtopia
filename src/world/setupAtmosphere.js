import {AmbientLight, DirectionalLight, Fog, HemisphereLight} from 'threejs-full-es6'
import scene from '../app/scene'
import renderer from '../app/renderer'
import {
    AMBIENT_LIGHT_COLOR,
    AMBIENT_LIGHT_INTENSITY,
    BACKGROUND_COLOR,
    DIRECTIONAL_LIGHT_COLOR,
    HEMISPHERE_LIGHT_GROUND_COLOR,
    HEMISPHERE_LIGHT_INTENSITY,
    HEMISPHERE_LIGHT_SKY_COLOR
} from '../color'
import {DIRECTIONAL_LIGHT_POSITION, FOG_FAR, FOG_NEAR} from '../space'

const setupAtmosphere = () => {
    const directionalLight = new DirectionalLight(DIRECTIONAL_LIGHT_COLOR)
    directionalLight.position.set(...DIRECTIONAL_LIGHT_POSITION)

    const ambientLight = new AmbientLight(AMBIENT_LIGHT_COLOR, AMBIENT_LIGHT_INTENSITY)

    const hemisphereLight = new HemisphereLight(
        HEMISPHERE_LIGHT_SKY_COLOR,
        HEMISPHERE_LIGHT_GROUND_COLOR,
        HEMISPHERE_LIGHT_INTENSITY,
    )

    scene.add(directionalLight, ambientLight, hemisphereLight)
    scene.fog = new Fog(BACKGROUND_COLOR, FOG_NEAR, FOG_FAR)

    renderer.setClearColor(BACKGROUND_COLOR)
}

export default setupAtmosphere
