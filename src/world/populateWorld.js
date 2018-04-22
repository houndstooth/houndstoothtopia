import {Color, PlaneGeometry} from 'threejs-full-es6'
import textureData from './textureData'
import setupAtmosphere from './setupAtmosphere'
import setupVantage from './setupVantage'
import addItem from './addItem'
import * as courtyardIntersections from './courtyardIntersections'
import geometryData from './geometryData'
import {addPlinthItem} from './plinth'

const populateWorld = async () => {
    setupAtmosphere()
    setupVantage()

    // the grounds

    addItem({
        name: 'ht3d_055_houndstrudeOutwardConvex',
        scale: [666, 666, 666],
        color: new Color(0x707066),
    })

    addItem({
        name: 'courtyard',
        scale: [666, 666, 666],
        color: new Color(0x667066),
        position: [0, .1, 0]
    })

    for (let i = 1; i <= 75; i++) {
        addItem({
            name: 'ht3d_027_houndstoothPrism',
            position: courtyardIntersections.getPosition(i, 0),
            color: new Color(0x999999),
        })
    }

    addItem({
        name: 'mainHall',
        rotation: [0, -Math.PI / 4, 0],
        scale: [50, 50, 50],
        color: new Color(0x707066),
        position: [0, 0, 0],
    })

    for (let i = 0; i < 10; i++) {
        const randomScale = (1 + Math.random()) * 50
        addItem({
            name: 'ht3d_004_houndstrudeCompound',
            rotation: [0, 5 * Math.PI / 4, 0],
            color: new Color(0xffffff),
            position: [1200 - Math.random() * 2400, 375, 1200 - Math.random() * 2400],
            scale: [randomScale, randomScale, randomScale],
        })
    }

    // houndsjects

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            for (let k = 0; k < 2; k++) {
                addItem({
                    name: 'ht3d_021_houndsjectGreater',
                    rotation: [-Math.PI / 2, 0, 0],
                    scale: [.25, .25, .25],
                    color: new Color(0x707066),
                    position: [i + 2, j + 1, k],
                })
                addItem({
                    name: 'ht3d_021_houndsjectGreater',
                    rotation: [-Math.PI / 2, 0, 0],
                    scale: [.25, .25, .25],
                    color: new Color(0x707066),
                    position: [i + 2 + .5, j + 1 + .5, k + .5],
                })
            }
        }
    }

    for (let i = 1; i <= 55; i++) {
        addPlinthItem(i)
    }

    geometryData.loadTheRest()

    await textureData.loadAll()

    // planes

    addItem({
        geometry: new PlaneGeometry(1, 1),
        rotation: [0, -Math.PI / 2, 0],
        position: [1, 2, 0],
        texture: textureData.texture.controls,
    })

    addItem({
        geometry: new PlaneGeometry(1, 1),
        rotation: [0, -Math.PI / 2, 0],
        position: [5, 1, -5],
        texture: textureData.texture.ht2d_010_houndazzle,
    })

    addItem({
        geometry: new PlaneGeometry(1, 1),
        rotation: [0, -Math.PI / 2, 0],
        position: [5, 1, -7],
        texture: textureData.texture.ht2d_007_cmyktooth,
    })

    addItem({
        geometry: new PlaneGeometry(1, 1),
        rotation: [0, -Math.PI / 2, 0],
        position: [5, 1, -9],
        texture: textureData.texture.ht2d_002_gingham_chevron_continuum,
    })

    addItem({
        geometry: new PlaneGeometry(1, 1),
        rotation: [0, -Math.PI / 2, 0],
        position: [5, 1, -11],
        texture: textureData.texture.ht2d_004_gongram,
    })

    addItem({
        geometry: new PlaneGeometry(1, 1),
        rotation: [0, -Math.PI / 2, 0],
        position: [5, 1, -13],
        texture: textureData.texture.ht2d_009_houndsmorphosis,
    })
}

export default populateWorld
