import {Mesh, MeshBasicMaterial, MeshLambertMaterial} from 'three'
import scene from './scene'
import {DEFAULT_ITEM_POSITION, DEFAULT_ITEM_ROTATION, DEFAULT_ITEM_SCALE} from '../spacetime'
import {DEFAULT_ITEM_COLOR} from '../color'
import {items} from './items'
import geometryData from './geometryData'

const addItem = ({
                           name,
                           geometry: standardGeometry,
                           texture,
                           color = DEFAULT_ITEM_COLOR,
                           position = DEFAULT_ITEM_POSITION,
                           scale = DEFAULT_ITEM_SCALE,
                           rotation = DEFAULT_ITEM_ROTATION,
                       }) => {
  window.setTimeout(() => {
    const material = texture ? new MeshBasicMaterial({
        map: texture,
        transparent: true
    }) : new MeshLambertMaterial({color})

    const mesh = new Mesh(standardGeometry || geometryData.load(name), material)
    mesh.position.set(...position)
    mesh.rotation.set(...rotation)
    mesh.scale.set(...scale)
    // mesh.castShadow = true
    // mesh.receiveShadow = true
    scene.add(mesh)

    if (!items[name]) items[name] = []
    items[name].push(mesh)
  })
}

export default addItem
