import {items} from './items'

const updateWorld = () => {
    items && items.cloud && items.cloud.forEach(cloud => {
        cloud.position.z += 0.1
        if (cloud.position.z > 800) cloud.position.setZ(-800)
    })
}

export default updateWorld
