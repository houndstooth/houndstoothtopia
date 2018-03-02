import {items} from './items'

const updateWorld = () => {
    items && items.cloud && items.cloud.forEach(cloud => {
        cloud.position.x += 0.01
        if (cloud.position.x > 100) cloud.position.setX(-100)
    })
}

export default updateWorld
