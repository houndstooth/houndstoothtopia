import {CONTROLLER_COLOR} from '../color'
import addItem from './addItem'
import idealMeshCycle from './idealMeshCycle'
import geometryData from './geometryData'
import wrappedIndex from '../utilities/wrappedIndex'
import scene from './scene'
import {items} from './items'
import deleteItems from './deleteItems'

const showcaser = {
    index: 0,
    mesh: null,
    hasBeenSetup: false,
}

function addShowcaser() {
    const name = wrappedIndex(idealMeshCycle, showcaser.index)
    addItem({
        name: 'showcaser',
        geometry: geometryData.geometry[name],
        color: CONTROLLER_COLOR,
        scale: [100, 100, 100],
    })
    document.querySelector('#showcase-name').innerText = name
}

const setupShowcaser = () => {
    if (showcaser.hasBeenSetup) return
    showcaser.hasBeenSetup = true

    deleteItems()

    let showcaseDiv = document.querySelector('#showcase')
    showcaseDiv.innerHTML = ''

    const showcaseName = document.createElement('div')
    showcaseName.id = 'showcase-name'
    showcaseDiv.appendChild(showcaseName)

    const leftCycler = document.createElement('div')
    leftCycler.innerText = '<'
    leftCycler.addEventListener('click', () => cycleShowcaser(-1))
    showcaseDiv.appendChild(leftCycler)

    const rightCycler = document.createElement('div')
    rightCycler.innerText = '>'
    rightCycler.addEventListener('click', () => cycleShowcaser(1))
    showcaseDiv.appendChild(rightCycler)

    addShowcaser(name)
}

let showcaseDiv = document.querySelector('#showcase')
showcaseDiv.addEventListener('click', setupShowcaser)

const cycleShowcaser = (direction) => {
    const oldShowcaser = items['showcaser'][0]
    scene.remove(oldShowcaser)
    oldShowcaser.geometry.dispose()
    oldShowcaser.material.dispose()
    items['showcaser'] = []

    showcaser.index += direction

    addShowcaser()
}

export {
    setupShowcaser,
    cycleShowcaser,
    showcaser,
}
