import {OBJLoader} from 'threejs-full-es6'

console.oldTime = console.time
console.time = (...args) => args[0] !== 'OBJLoader' && console.oldTime.apply(console, args)
console.oldTimeEnd = console.timeEnd
console.timeEnd = (...args) => args[0] !== 'OBJLoader' && console.oldTimeEnd.apply(console, args)

const objLoader = new OBJLoader()

const context = require.context('../../geometry')

const geometry = {}

const pathToName = path => path.replace('./', '').replace('.obj', '')

const nameToPath = name => './' + name + '.obj'

const loadOne = path => geometry[pathToName(path)] = objLoader.parse(context(path)).children[0].geometry

const load = name => geometry[name] || loadOne(context.keys().find(key => key === nameToPath(name)))

const loadTheRest = () => context.keys().forEach(path => geometry[pathToName(path)] || loadOne(path))

geometry.pathToName = pathToName
geometry.nameToPath = nameToPath
geometry.load = load
geometry.loadTheRest = loadTheRest

export {
    geometry,
}
