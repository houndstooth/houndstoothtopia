import {OBJLoader} from 'threejs-full-es6'

console.oldTime = console.time
console.time = (...args) => args[0] !== 'OBJLoader' && console.oldTime.apply(console, args)
console.oldTimeEnd = console.timeEnd
console.timeEnd = (...args) => args[0] !== 'OBJLoader' && console.oldTimeEnd.apply(console, args)

const context = require.context('../../geometry')

const geometry = {
}

const loadOne = (name, path, resolve) => {
    new OBJLoader().load(context(path), object => {
        const result = object.children[0].geometry
        geometry[name] = result
        resolve(result)
    })
}

const load = name => {
    if (geometry[name]) return geometry[name]
    const path = './' + name + '.obj'
    return new Promise(resolve => {
        context.keys().forEach(key => {
            key === path && loadOne(name, path, resolve)
        })
    })
}

const loadTheRest = () => {
    Promise.all(
        context.keys().map(path => {
            const name = path.replace('./', '').replace('.obj', '')
            return geometry[name] || new Promise(resolve => loadOne(name, path, resolve))
        })
    )
}

geometry.load = load
geometry.loadTheRest = loadTheRest

export {
    geometry,
}
