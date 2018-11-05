import {items} from './items'
import scene from './scene'

const deleteItems = () => {
    Object.values(items).forEach(itemType => {
        itemType.forEach(async item => {
            await scene.remove(item)
            if (item.mesh) {
                item.mesh.geometry.dispose()
                item.mesh.material.dispose()
            }
        })
    })
}

export default deleteItems
