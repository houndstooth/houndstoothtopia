import objectLoader from './objectLoader'

const geometry = {}
const metadata = {}

const VERTEX = 'v'

const context = require.context('../../geometry')

const idFromName = name => parseInt(name.slice(5, 8))

const nameFromId = id => Object.keys(metadata).find(name => name.includes(formatId(id)))

const formatId = id => {
    let output = id.toString()
    while (output.length < 3) output = '0' + output
    return `ht3d_${output}`
}

const pathToName = path => path.replace('./', '').replace('.obj', '')

const nameToPath = name => './' + name + '.obj'

const loadOne = path => geometry[pathToName(path)] = objectLoader.parse(context(path)).children[0].geometry

const load = name => geometry[name] || loadOne(context.keys().find(key => key === nameToPath(name)))

const loadTheRest = () => context.keys().forEach(path => geometry[pathToName(path)] || loadOne(path))

context.keys().forEach(path => {
    let minimumY = 0
    context(path).split('\n').forEach(line => {
        const [type, _, yAsString, __] = line.split(' ')
        if (type === VERTEX) {
            const y = parseFloat(yAsString)
            if (y < minimumY) minimumY = y
        }
    })
    metadata[pathToName(path)] = {
        plinthOffset: (minimumY * -1) + 2
    }
})

export default {
    load,
    loadTheRest,
    idFromName,
    nameFromId,
    metadata,
    geometry,
}
