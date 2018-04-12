import {OBJLoader} from 'threejs-full-es6'

console.oldTime = console.time
console.time = (...args) => args[0] !== 'OBJLoader' && console.oldTime.apply(console, args)
console.oldTimeEnd = console.timeEnd
console.timeEnd = (...args) => args[0] !== 'OBJLoader' && console.oldTimeEnd.apply(console, args)

export default new OBJLoader()
