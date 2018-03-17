import {geometry} from './geometry'
import {Mesh, MeshLambertMaterial} from 'threejs-full-es6'
import {CONTROLLER_COLOR} from '../color'
import {CONTROLLER_SCALE} from '../space'

const CONTROLLER_ROTATION = [0, Math.PI / 4, 0]

const controllerMesh = id => {
    const idKey = 'ht3d_' + ('00' + id.toString()).slice(-3)
    const mesh = new Mesh(geometry[idKey], new MeshLambertMaterial({color: CONTROLLER_COLOR}))
    mesh.rotation.set(...CONTROLLER_ROTATION)
    mesh.scale.set(...CONTROLLER_SCALE)

    return mesh
}

export default controllerMesh
