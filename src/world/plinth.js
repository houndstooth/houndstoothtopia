import * as courtyardIntersections from './courtyardIntersections'
import geometryData from './geometryData'
import addItem from './addItem'

export const addPlinthItem = id => {
    const name = geometryData.nameFromId(id)
    addItem({
        name,
        position: courtyardIntersections.getPosition(id, geometryData.metadata[name].plinthOffset),
    })
}
