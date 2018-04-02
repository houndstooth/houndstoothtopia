import {OBJLoader} from 'threejs-full-es6'

const context = require.context('../../geometry')

const geometry = {
    byIndex: []
}

const loadOne = (path, resolve, index) => {
    new OBJLoader().load(context(path), object => {
        const result = object.children[0].geometry
        geometry[name] = result
        geometry.byIndex[index] = result
        resolve(result)
    })
}

const load = name => {
    if (geometry[name]) return geometry[name]
    const path = './' + name + '.obj'
    return new Promise(resolve => {
        context.keys().forEach((key, index) => {
            key === path && loadOne(path, resolve, index)
        })
    })
}

const loadTheRest = () => {
    Promise.all(
        context.keys().map((path, index) => {
            const name = path.replace('./', '').replace('.obj', '')
            return geometry[name] || new Promise(resolve => loadOne(path, resolve, index))
        })
    )
}

geometry.load = load
geometry.loadTheRest = loadTheRest

export {
    geometry,
}
