import {items} from './items'

const updateWorld = () => {
    items && items.cloud && items.cloud.forEach(cloud => {
        cloud.position.x += 0.1
        if (cloud.position.x > 800) cloud.position.setX(-800)
    })
}

export default updateWorld
