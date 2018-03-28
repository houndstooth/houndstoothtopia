import {Mesh, MeshBasicMaterial, MeshLambertMaterial} from 'threejs-full-es6'
import scene from '../app/scene'
import {DEFAULT_ITEM_POSITION, DEFAULT_ITEM_ROTATION, DEFAULT_ITEM_SCALE} from '../spacetime'
import {DEFAULT_ITEM_COLOR} from '../color'
import {items} from './items'

const addItem = ({
                     name,
                     geometry,
                     texture,
                     color = DEFAULT_ITEM_COLOR,
                     position = DEFAULT_ITEM_POSITION,
                     scale = DEFAULT_ITEM_SCALE,
                     rotation = DEFAULT_ITEM_ROTATION
                 }) => {
    const material = texture ? new MeshBasicMaterial({map: texture,  transparent: true}) : new MeshLambertMaterial({color})
    const mesh = new Mesh(geometry, material)
    mesh.position.set(...position)
    mesh.rotation.set(...rotation)
    mesh.scale.set(...scale)
    // mesh.castShadow = true
    // mesh.receiveShadow = true
    scene.add(mesh)

    if (!items[name]) items[name] = []
    items[name].push(mesh)
}

export default addItem
