import {Mesh, MeshLambertMaterial} from 'three-full'
import geometryData from './geometryData'
import {CONTROLLER_COLOR} from '../color'
import {CONTROLLER_SCALE} from '../spacetime'

const CONTROLLER_ROTATION = [0, Math.PI / 4, 0]

const idealControllerMeshCycle = [
    // fundamental/dimensional family (1 of 2)
    'ht3d_000_houndstooth',

    // prismatoid family
    'ht3d_006_houndstrudeFreshmans',
    'ht3d_036_houndstrudeFreshmansMiteredByEdges',
    'ht3d_055_houndstrudeOutwardConvex',
    'ht3d_003_houndstrudeConvex',
    'ht3d_033_houndstrudeConvexMiteredByEdges',
    'ht3d_004_houndstrudeCompound',
    'ht3d_034_houndstrudeCompoundMiteredByEdges',
    'ht3d_005_houndstrudeConcave',
    'ht3d_035_houndstrudeConcaveMiteredByEdges',
    'ht3d_027_houndstoothPrism',
    'ht3d_028_houndstoothPrismComposite',
    'ht3d_029_houndstoothPrismCompositeWithSwirl',
    'ht3d_030_houndstoothPrismCompositeAlignedHalves',
    'ht3d_031_houndstoothPrismCompositeSwirledHalves',

    // projections, faces, & compounds family
    'ht3d_020_houndstampLesser',
    'ht3d_018_houndstampGreaterExtruded',
    'ht3d_054_houndstampGreaterExtrudedWithSwirl',
    'ht3d_022_houndsjectLesser',
    'ht3d_023_houndsjectLesserWithInversion',
    'ht3d_021_houndsjectGreater',
    'ht3d_037_octahedstoothWithItsHomogeneousFacesCusps',
    'ht3d_019_octahedstoothWithItsHomogeneousFacesRoots',
    'ht3d_032_rhombicDodecahedstooth',
    'ht3d_041_vertoothCusps',
    'ht3d_042_vertoothRoots',
    'ht3d_043_vertoothCompoundCusps',
    'ht3d_044_vertoothCompoundRoots',
    'ht3d_045_vertoothCompoundCuspsAndRoots',
    'ht3d_046_vertoothCuspsSpun',
    'ht3d_047_vertoothRootsSpun',
    'ht3d_048_vertoothCompoundCuspsSpun',
    'ht3d_049_vertoothCompoundRootsSpun',
    'ht3d_050_vertoothCompoundCuspsAndRootsSpun',
    'ht3d_051_vertoothSwirl',
    'ht3d_052_vertoothSwirlCompound',
    'ht3d_053_vertoothSwirlCompoundCounterAndClockwise',

    // lathe family
    'ht3d_024_helixtooth',
    'ht3d_025_helixtoothSquaredOff',
    'ht3d_007_houndslatheInterior',
    'ht3d_038_houndslatheInteriorToroidalPolyhedronVersion',
    'ht3d_010_houndslatheExterior',
    'ht3d_015_houndslatheExteriorToroidalPolyhedronVersion',
    'ht3d_009_houndstoothHornToroidCuspToCusp',
    'ht3d_014_houndstoothHornToroidalPolyhedronCuspToCusp',
    'ht3d_008_houndstoothHornToroidRootToRoot',
    'ht3d_013_houndstoothHornToroidalPolyhedronRootToRoot',
    'ht3d_012_houndstoothArch',
    'ht3d_017_houndstoothArchToroidalPolyhedronVersion',
    'ht3d_011_houndstwist',

    // topological family
    'ht3d_002_hosotooth',
    'ht3d_016_hosotoothOctahedrified',
    'ht3d_039a_houndstorusToroidalGrainSolidsTop',
    'ht3d_039b_houndstorusToroidalGrainSolidsOut',
    'ht3d_039c_houndstorusToroidalGrainSolidsBottom',
    'ht3d_039d_houndstorusToroidalGrainSolidsIn',
    'ht3d_040a_houndstorusPoloidalGrainSolidsTop',
    'ht3d_040b_houndstorusPoloidalGrainSolidsOut',
    'ht3d_040c_houndstorusPoloidalGrainSolidsBottom',
    'ht3d_040d_houndstorusPoloidalGrainSolidsIn',

    // miscellaneous family
    'ht3d_026_parallelopipedStripedHoundstooth',

    // fundamental/dimensional family (2 of 2)
    'ht3d_001_dougstooth',
]

const controllerMesh = index => {
    const mesh = new Mesh(
        geometryData.geometry[wrappedIndex(idealControllerMeshCycle, index)],
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

    return array[i]
}

const updateControllerMesh = controller => {
    if (controller.mesh) {
        controller.remove(controller.mesh)
        controller.mesh.geometry.dispose()
        controller.mesh.material.dispose()
    }

    const newMesh = controllerMesh(controller.meshGeometryIndex)
    controller.add(newMesh)
    controller.mesh = newMesh
}

const cycleMesh = event => {
    const controller = event.target
    controller.meshGeometryIndex += controller.cyclingDirection
    updateControllerMesh(controller)
}

const setCyclingDirection = event => event.target.cyclingDirection = event.axes[0] < 0 ? -1 : 1

const onControllerConnected = controller => {
    updateControllerMesh(controller)
    controller.addEventListener('thumbpad axes changed', setCyclingDirection)
    controller.addEventListener('thumbpad press began', cycleMesh)
}

export {
    onControllerConnected
}
