import geometry from './geometry'

const metadata = {}

const VERTEX = 'v'

const context = require.context('../../geometry')
context.keys().forEach(path => {
    let minimumY = 0
    context(path).split('\n').forEach(line => {
        const [type, _, yAsString, __] = line.split(' ')
        if (type === VERTEX) {
            const y = parseFloat(yAsString)
            if (y < minimumY) minimumY = y
        }
    })
    metadata[geometry.pathToName(path)] = {
        plinthOffset: (minimumY * -1) + 2
    }
})

const idFromName = name => parseInt(name.slice(5, 8))

const nameFromId = id => Object.keys(metadata).find(name => name.includes(formatId(id)))

const formatId = id => {
    let output = id.toString()
    while (output.length < 3)output = '0' + output
    return `ht3d_${output}`
}

metadata.idFromName = idFromName
metadata.nameFromId = nameFromId

export default metadata
