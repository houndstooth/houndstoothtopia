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
        name: 'ground',
        geometry: new PlaneGeometry(1000, 1000),
        rotation: [-Math.PI / 2, 0, 0],
        position: [0, 0, 0],
        color: new Color(0x667066)
    })

    // houndstrudes

    addItem({
        name: 'main hall',
        geometry: geometry.ht3d_003_houndstrudeConvex,
        rotation: [0, -Math.PI / 4, 0],
        scale: [50, 50, 50],
        color: new Color(0x707066),
        position: [150, 0, -50],
    })

    for (let i = 0; i < 10; i++) {
        const randomScale = Math.random() * 10
        addItem({
            name: 'cloud',
            geometry: geometry.ht3d_004_oundstrudeCompound,
            rotation: [Math.PI / 2, 0, Math.random() * Math.PI],
            color: new Color(0xffffff),
            position: [100 - Math.random() * 200, 175, 100 - Math.random() * 200],
            scale: [randomScale, randomScale, randomScale],
        })
    }

    // houndsjects

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            for (let k = 0; k < 2; k++) {
                addItem({
                    name: 'greater houndsject tile',
                    geometry: geometry.ht3d_021_houndsjectGreater,
                    rotation: [-Math.PI / 2, 0, 0],
                    scale: [.25, .25, .25],
                    color: new Color(0x707066),
                    position: [i, j + 1, k],
                })
                addItem({
                    name: 'greater houndsject tile',
                    geometry: geometry.ht3d_021_houndsjectGreater,
                    rotation: [-Math.PI / 2, 0, 0],
                    scale: [.25, .25, .25],
                    color: new Color(0x707066),
                    position: [i + .5, j + 1 + .5, k + .5],
                })
            }
        }
    }

    addItem({
        name: 'torii',
        geometry: geometry.ht3d_023_houndsjectLesserWithInversion,
        position: [5, 3.5, 5],
        rotation: [0, -Math.PI / 2, 0]
    })

    addItem({
        name: 'lesser houndsject',
        geometry: geometry.ht3d_022_houndsjectLesser,
        position: [0, 30, 0],
    })

    // primitive inspired

    addItem({
        name: 'spherical houndstooth',
        geometry: geometry.ht3d_002_hosotooth,
        position: [-20, 2, -20],
    })

    addItem({
        name: 'spherical houndstooth, octahedrified',
        geometry: geometry.ht3d_016_hosotoothOctahedrified,
        position: [-40, 2, -40],
    })

    // addItem({
    //   name: 'toroidal houndstooth',
    //   geometry: geometry.ht3d_024_houndstorus,
    //   rotation: [Math.PI, 0, 0],
    //   position: [30, 40, -20],
    // })

    // OG

    addItem({
        name: 'the original - dougstooth',
        geometry: geometry.ht3d_001_dougstooth,
        position: [-20, 3, 20],
    })

    // houndstamps

    addItem({
        name: 'greater houndstamp, extruded style',
        geometry: geometry.ht3d_018_houndstampGreaterExtruded,
        position: [30, 3, 30],
    })

    addItem({
        name: 'lesser houndstamp',
        geometry: geometry.ht3d_020_houndstampLesser,
        position: [20, 3, 0],
    })

    // toroids and lathes

    addItem({
        name: 'cylindrical houndstooth',
        geometry: geometry.ht3d_007_houndslatheInterior,
        rotation: [Math.PI, 0, 0],
        position: [20, 4, -20],
    })

    addItem({
        name: 'double cylindrical houndstooth',
        geometry: geometry.ht3d_010_houndslatheExterior,
        position: [20, 4, -30],
    })

    addItem({
        name: 'cylindrical houndstooth - squared off',
        geometry: geometry.ht3d_038_houndslatheInteriorToroidalPolyhedronVersion,
        rotation: [Math.PI, 0, 0],
        position: [20, 4, -40],
    })

    addItem({
        name: 'houndstooth horn toroid - cusp to cusp',
        geometry: geometry.ht3d_009_houndstoothHornToroidCuspToCusp,
        position: [-10, 2, 0],
    })

    addItem({
        name: 'houndstooth horn toroid - root to root',
        geometry: geometry.ht3d_008_houndstoothHornToroidRootToRoot,
        position: [-20, 2, 0],
    })

    addItem({
      name: 'houndstooth arch',
      geometry: geometry.ht3d_012_houndstoothArch,
      position: [-30, 2, 30],
    })

    addItem({
        name: 'houndstooth arch squared off',
        geometry: geometry.ht3d_017_houndstoothArchToroidalPolyhedronVersion,
        position: [-40, 2, 40],
    })

    addItem({
        name: 'houndstwist',
        geometry: geometry.ht3d_011_houndstwist,
        position: [-80, 10, -10],
    })

    addItem({
        name: 'houndstooth horn toroid - root to root - squared off',
        geometry: geometry.ht3d_013_houndstoothHornToroidalPolyhedronRootToRoot,
        position: [-80, 10, -20],
    })

    addItem({
        name: 'houndstooth horn toroid - cusp to cusp - squared off',
        geometry: geometry.ht3d_014_houndstoothHornToroidalPolyhedronCuspToCusp,
        position: [-80, 10, -30],
    })

    addItem({
        name: 'houndslathe exterior - squared off',
        geometry: geometry.ht3d_015_houndslatheExteriorToroidalPolyhedronVersion,
        position: [-80, 10, -40],
    })

    // prism-based

    addItem({
        name: 'houndstooth prism',
        geometry: geometry.ht3d_027_houndstoothPrism,
        position: [-30, 2, 0],
    })

    addItem({
        name: 'composite of houndstooth prisms where they are oriented to converge onto a vertex',
        geometry: geometry.ht3d_028_houndstoothPrismComposite,
        position: [-40, 2, 0],
    })

    addItem({
        name: 'composite of houndstooth prisms where they are oriented in a swirl around a vertex',
        geometry: geometry.ht3d_029_houndstoothPrismCompositeWithSwirl,
        position: [-50, 2, 0],
    })

    addItem({
        name: 'composite of houndstooth prisms where they are oriented to converge onto a vertex, reversed halves',
        geometry: geometry.ht3d_030_houndstoothPrismCompositeAlignedHalves,
        position: [-40, 2, -20],
    })

    addItem({
        name: 'composite of houndstooth prisms where they are oriented in a swirl around a vertex, reversed halves',
        geometry: geometry.ht3d_031_houndstoothPrismCompositeSwirledHalves,
        position: [-50, 2, -20],
    })

    // hedra

    addItem({
        name: 'octahedstooth with its homogeneous faces roots',
        geometry: geometry.ht3d_019_octahedstoothWithItsHomogeneousFacesRoots,
        position: [-30, 2, 40],
    })

    addItem({
        name: 'octahedstooth with its homogeneous faces cusps',
        geometry: geometry.ht3d_037_octahedstoothWithItsHomogeneousFacesCusps,
        position: [-30, 2, 50],
    })

    addItem({
        name: 'rhombic dodecahedstooth',
        geometry: geometry.ht3d_032_rhombicDodecahedstooth,
        position: [-30, 2, 60],
    })
}

export default populateWorld
