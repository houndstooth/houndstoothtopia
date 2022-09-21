const THREE = require('three')
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

console.oldTime = console.time
console.time = (...args) => args[0] !== 'OBJLoader' && console.oldTime.apply(console, args)
console.oldTimeEnd = console.timeEnd
console.timeEnd = (...args) => args[0] !== 'OBJLoader' && console.oldTimeEnd.apply(console, args)

const manager = new THREE.LoadingManager()

const objectLoader = new OBJLoader(manager)

export {
    objectLoader
}
