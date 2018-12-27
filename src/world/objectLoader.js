const THREE = require('three')
import OBJLoader from 'three-obj-loader'
OBJLoader(THREE)

console.oldTime = console.time
console.time = (...args) => args[0] !== 'OBJLoader' && console.oldTime.apply(console, args)
console.oldTimeEnd = console.timeEnd
console.timeEnd = (...args) => args[0] !== 'OBJLoader' && console.oldTimeEnd.apply(console, args)

const objectLoader = new THREE.OBJLoader()

export {
    objectLoader
}
