import {CONTROLLER_COLOR} from '../color'
import addItem from './addItem'
import idealMeshCycle from './idealMeshCycle'
import geometryData from './geometryData'
import wrappedIndex from '../utilities/wrappedIndex'
import scene from './scene'
import {items} from './items'

const showcaser = {
    index: 0,
    mesh: null,
}

const addShowcaser = () => {
    addItem({
        name: 'showcaser',
        geometry: geometryData.geometry[wrappedIndex(idealMeshCycle, showcaser.index)],
        color: CONTROLLER_COLOR,
        scale: [100,100,100],
    })
}

const cycleShowcaser = (direction) => {
    const oldShowcaser = items['showcaser'][0]
    scene.remove(oldShowcaser)
    oldShowcaser.geometry.dispose()
    oldShowcaser.material.dispose()
    showcaser.index += direction
    items['showcaser'] = []
    addShowcaser()
}

export {
    addShowcaser,
    cycleShowcaser,
    showcaser,
}
