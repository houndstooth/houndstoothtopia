import {geometry} from './geometry'
import {Mesh, MeshLambertMaterial} from 'threejs-full-es6'
import {CONTROLLER_COLOR} from '../color'
import {CONTROLLER_SCALE} from '../spacetime'

const CONTROLLER_ROTATION = [0, Math.PI / 4, 0]

const idealControllerMeshCycle = [
    'ht3d_000_houndstooth',
    'ht3d_027_houndstoothPrism',
    'ht3d_028_houndstoothPrismComposite'
]

const controllerMesh = index => {
    const mesh = new Mesh(
        geometry[wrappedIndex(idealControllerMeshCycle, index)],
        new MeshLambertMaterial({color: CONTROLLER_COLOR}),
    )
    mesh.rotation.set(...CONTROLLER_ROTATION)
    mesh.scale.set(...CONTROLLER_SCALE)

    return mesh
}

const wrappedIndex = (array, index) => {
    let i
    if (index < 0) {
        i = array.length - Math.abs(index) % array.length
        if (i === array.length) {
            i = 0
        }
    }
    else {
        i = index % array.length
    }

    return array[ i ]
}

export default controllerMesh
