import {Color, PlaneGeometry} from 'threejs-full-es6'
import {texture} from './texture'
import setupAtmosphere from './setupAtmosphere'
import setupVantage from './setupVantage'
import addItem from './addItem'
import * as courtyardIntersections from './courtyardIntersections'
import {geometry} from '../world/geometry'

const populateWorld = async () => {
    setupAtmosphere()
    setupVantage()

    await texture.load()

    // planes

    await addItem({
        geometry: new PlaneGeometry(1, 1),
        rotation: [0, -Math.PI / 2, 0],
        position: [1, 2, 0],
        texture: texture.controls,
    })

    await addItem({
        geometry: new PlaneGeometry(1, 1),
        rotation: [0, -Math.PI / 2, 0],
        position: [5, 1, -5],
        texture: texture.ht2d_010_houndazzle,
    })

    await addItem({
        geometry: new PlaneGeometry(1, 1),
        rotation: [0, -Math.PI / 2, 0],
        position: [5, 1, -7],
        texture: texture.ht2d_007_cmyktooth,
    })

    await addItem({
        geometry: new PlaneGeometry(1, 1),
        rotation: [0, -Math.PI / 2, 0],
        position: [5, 1, -9],
        texture: texture.ht2d_002_gingham_chevron_continuum,
    })

    await addItem({
        geometry: new PlaneGeometry(1, 1),
        rotation: [0, -Math.PI / 2, 0],
        position: [5, 1, -11],
        texture: texture.ht2d_004_gongram,
    })

    await addItem({
        geometry: new PlaneGeometry(1, 1),
        rotation: [0, -Math.PI / 2, 0],
        position: [5, 1, -13],
        texture: texture.ht2d_009_houndsmorphosis,
    })

    // the grounds

    await addItem({
        name: 'ht3d_055_houndstrudeOutwardConvex',
        scale: [666, 666, 666],
        color: new Color(0x707066),
    })

    await addItem({
        name: 'courtyard',
        scale: [666, 666, 666],
        color: new Color(0x667066),
        position: [0, .1, 0]
    })

    for (let i = 1; i <= 75; i++) {
        await addItem({
            name: 'ht3d_027_houndstoothPrism',
            position: courtyardIntersections.getPosition(i, 0),
            color: new Color(0x999999),
        })
    }

    await addItem({
        name: 'mainHall',
        rotation: [0, -Math.PI / 4, 0],
        scale: [50, 50, 50],
        color: new Color(0x707066),
        position: [0, 0, 0],
    })

    for (let i = 0; i < 10; i++) {
        const randomScale = (1 + Math.random()) * 50
        await addItem({
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
                await addItem({
                    name: 'ht3d_021_houndsjectGreater',
                    rotation: [-Math.PI / 2, 0, 0],
                    scale: [.25, .25, .25],
                    color: new Color(0x707066),
                    position: [i + 2, j + 1, k],
                })
                await addItem({
                    name: 'ht3d_021_houndsjectGreater',
                    rotation: [-Math.PI / 2, 0, 0],
                    scale: [.25, .25, .25],
                    color: new Color(0x707066),
                    position: [i + 2 + .5, j + 1 + .5, k + .5],
                })
            }
        }
    }

    await addItem({
        name: 'ht3d_023_houndsjectLesserWithInversion',
        position: courtyardIntersections.getPosition(23),
        rotation: [0, -Math.PI / 2, 0]
    })

    await addItem({
        name: 'ht3d_022_houndsjectLesser',
        position: courtyardIntersections.getPosition(22),
    })

    // primitive inspired

    await addItem({
        name: 'ht3d_002_hosotooth',
        position: courtyardIntersections.getPosition(2),
    })

    await addItem({
        name: 'ht3d_016_hosotoothOctahedrified',
        position: courtyardIntersections.getPosition(16),
    })

    // OG

    await addItem({
        name: 'ht3d_001_dougstooth',
        position: courtyardIntersections.getPosition(1),
    })

    // houndstamps

    await addItem({
        name: 'ht3d_018_houndstampGreaterExtruded',
        position: courtyardIntersections.getPosition(18),
    })

    await addItem({
        name: 'ht3d_020_houndstampLesser',
        position: courtyardIntersections.getPosition(20),
    })

    // toroids and lathes

    await addItem({
        name: 'ht3d_007_houndslatheInterior',
        position: courtyardIntersections.getPosition(7),
    })

    await addItem({
        name: 'ht3d_010_houndslatheExterior',
        position: courtyardIntersections.getPosition(10),
    })

    await addItem({
        name: 'ht3d_038_houndslatheInteriorToroidalPolyhedronVersion',
        position: courtyardIntersections.getPosition(38),
    })

    await addItem({
        name: 'ht3d_009_houndstoothHornToroidCuspToCusp',
        position: courtyardIntersections.getPosition(9),
    })

    await addItem({
        name: 'ht3d_008_houndstoothHornToroidRootToRoot',
        position: courtyardIntersections.getPosition(8),
    })

    await addItem({
        name: 'ht3d_012_houndstoothArch',
        position: courtyardIntersections.getPosition(12),
    })

    await addItem({
        name: 'ht3d_017_houndstoothArchToroidalPolyhedronVersion',
        position: courtyardIntersections.getPosition(17),
    })

    await addItem({
        name: 'ht3d_011_houndstwist',
        position: courtyardIntersections.getPosition(11),
    })

    await addItem({
        name: 'ht3d_013_houndstoothHornToroidalPolyhedronRootToRoot',
        position: courtyardIntersections.getPosition(13),
    })

    await addItem({
        name: 'ht3d_014_houndstoothHornToroidalPolyhedronCuspToCusp',
        position: courtyardIntersections.getPosition(14),
    })

    await addItem({
        name: 'ht3d_015_houndslatheExteriorToroidalPolyhedronVersion',
        position: courtyardIntersections.getPosition(15),
    })

    // prism-based

    await addItem({
        name: 'ht3d_027_houndstoothPrism',
        position: courtyardIntersections.getPosition(27),
    })

    await addItem({
        name: 'ht3d_028_houndstoothPrismComposite',
        position: courtyardIntersections.getPosition(28),
    })

    await addItem({
        name: 'ht3d_029_houndstoothPrismCompositeWithSwirl',
        position: courtyardIntersections.getPosition(29),
    })

    await addItem({
        name: 'ht3d_030_houndstoothPrismCompositeAlignedHalves',
        position: courtyardIntersections.getPosition(30),
    })

    await addItem({
        name: 'ht3d_031_houndstoothPrismCompositeSwirledHalves',
        position: courtyardIntersections.getPosition(31),
    })

    // hedra

    await addItem({
        name: 'ht3d_019_octahedstoothWithItsHomogeneousFacesRoots',
        position: courtyardIntersections.getPosition(19),
    })

    await addItem({
        name: 'ht3d_037_octahedstoothWithItsHomogeneousFacesCusps',
        position: courtyardIntersections.getPosition(37),
    })

    await addItem({
        name: 'ht3d_032_rhombicDodecahedstooth',
        position: courtyardIntersections.getPosition(32),
    })

    geometry.loadTheRest()
}

export default populateWorld
