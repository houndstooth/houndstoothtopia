import {OBJLoader} from 'threejs-full-es6'

const context = require.context('../../geometry')

const byIndex = []

const load = name => {
    if (geometry[name]) return geometry[name]
    const path = './' + name + '.obj'
    return new Promise(resolve => {
        context.keys().forEach((key, index) => {
            if (key !== path) return
            new OBJLoader().load(context(key), object => {
                const result = object.children[0].geometry
                geometry[name] = result
                byIndex[index] = result
                resolve(result)
            })
        })
    })
}

const geometry = {
    load,
    byIndex,
}

export {
    geometry,
}
