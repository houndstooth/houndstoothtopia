import {Color, PlaneGeometry} from 'threejs-full-es6'
import {geometry} from './geometry'
import setupAtmosphere from './setupAtmosphere'
import setupVantage from './setupVantage'
import addItem from './addItem'

const populateWorld = async () => {
    setupAtmosphere()
    setupVantage()
    await geometry.load()

    addItem({
        name: 'mainHall',
        geometry: geometry.houndstrudeConvex,
        rotation: [0, -Math.PI / 4, 0],
        scale: [50, 50, 50],
        color: new Color(0x707066),
        position: [150, 0, -50],
    })

    addItem({
        name: 'ground',
        geometry: new PlaneGeometry(1000, 1000),
        rotation: [-Math.PI / 2, 0, 0],
        position: [0, 0, 0],
        color: new Color(0x667066)
    })

    addItem({
        name: 'torii',
        geometry: geometry.houndsjectLesserWithInversion,
        position: [5, 3.5, 5],
        rotation: [0, -Math.PI / 2, 0]
    })

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            for (let k = 0; k < 2; k++) {
                addItem({
                    name: 'houndsjectTile',
                    geometry: geometry.houndsjectGreater,
                    rotation: [-Math.PI / 2, 0, 0],
                    scale: [.25, .25, .25],
                    color: new Color(0x707066),
                    position: [i, j + 1, k],
                })
                addItem({
                    name: 'houndsjectTile',
                    geometry: geometry.houndsjectGreater,
                    rotation: [-Math.PI / 2, 0, 0],
                    scale: [.25, .25, .25],
                    color: new Color(0x707066),
                    position: [i + .5, j + 1 + .5, k + .5],
                })
            }
        }
    }

    for (let i = 0; i < 100; i++) {
        const randomScale = Math.random() * 10
        addItem({
            name: 'cloud',
            geometry: geometry.houndstrudeCompound,
            rotation: [Math.PI / 2, 0, Math.random() * Math.PI],
            color: new Color(0xffffff),
            position: [1000 - Math.random() * 2000, 175, 1000 - Math.random() * 2000],
            scale: [randomScale, randomScale, randomScale],
        })
    }

    addItem({
        name: 'spherical-houndstooth',
        geometry: geometry.hosotooth,
        position: [-20, 2, -20],
    })

    addItem({
        name: 'cylindrical-houndstooth',
        geometry: geometry.houndslathe,
        rotation: [Math.PI, 0, 0],
        position: [20, 4, -20],
    })

    addItem({
        name: 'dougstooth',
        geometry: geometry.dougstooth,
        position: [-20, 3, 20],
    })

    addItem({
        name: 'houndstamp',
        geometry: geometry.houndstampGreaterExtruded,
        position: [30, 3, 30],
    })

    addItem({
        name: 'houndsject the lesser',
        geometry: geometry.houndsjectLesser,
        position: [0, 30, 0],
    })

    addItem({
        name: 'houndstamp the lesser',
        geometry: geometry.houndstampLesser,
        position: [20, 3, 0],
    })

    addItem({
        name: 'houndstamp the greater by roots',
        geometry: geometry.houndstampGreaterRoots,
        position: [10, 10, 10],
    })

    addItem({
        name: 'houndstamp the greater by cusps',
        geometry: geometry.houndstampGreaterCusps,
        position: [-10, 10, -10],
    })
}

export default populateWorld
