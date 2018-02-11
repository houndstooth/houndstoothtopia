import {items} from './items'

const updateWorld = () => {
    items && items.cloud && items.cloud.forEach(cloud => {
        cloud.position.x += 0.01
        if (cloud.position.x > 1000) cloud.position.setX(-1000)
    })
}

export default updateWorld
