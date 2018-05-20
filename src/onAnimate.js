import easing from './navigation/easing'
import updateWorld from './world/updateWorld'
import elevation from './navigation/elevation'
import locomotion from './navigation/locomotion'

const onAnimate =  () => {
    easing.update()
    locomotion.update()
    elevation.update()
    updateWorld()
}

export default onAnimate
