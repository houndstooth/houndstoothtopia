import * as courtyardIntersections from './courtyardIntersections'
import metadata from './metadata'
import addItem from './addItem'

export const addPlinthItem = id => {
    const name = metadata.nameFromId(id)
    addItem({
        name,
        position: courtyardIntersections.getPosition(id, metadata[name].plinthOffset),
    })
}
