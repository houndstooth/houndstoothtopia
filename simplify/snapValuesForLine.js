const fs = require('fs')
const maybeSnapValue = require('./maybeSnapValue')

const VERTEX_PRECISION = 5
const VERTEX_NORMAL_PRECISION = 3

const isFaceLine = header => header === 'f'

const isVertexLine = header => header === 'v'

const isVertexNormalLine = header => header === 'vn'

const snapValuesForLine = (outfile, line) => {
    const splitLine = line.split(' ')
    const header = splitLine.shift()

    if (isFaceLine(header)) {
        fs.appendFileSync(outfile, line + '\n')
        return
    }
    if (!isVertexLine(header) && !isVertexNormalLine(header)) return

    const precision = isVertexLine(header) ? VERTEX_PRECISION : VERTEX_NORMAL_PRECISION
    const snappedValues = splitLine.map(value => maybeSnapValue(parseFloat(value), precision))
    const output = [header].concat(snappedValues).join(' ') + '\n'

    fs.appendFileSync(outfile, output)
}

module.exports = snapValuesForLine
