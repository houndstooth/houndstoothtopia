const readline = require('readline')
const fs = require('fs')
const snapValuesForLine = require('./snapValuesForLine')
const actuallySimplifyAndCleanUp = require('./actuallySimplifyAndCleanUp')

const simplifyFile = filename => {
    const originalFile = './geometry/' + filename

    if (fileIsAMaterial(originalFile)) {
        deleteFile(originalFile)
        return
    }

    const temporaryFile = originalFile + '.snapped'

    readline.createInterface({input: fs.createReadStream(originalFile)})
        .on('line', line => snapValuesForLine(temporaryFile, line))
        .on('close', () => actuallySimplifyAndCleanUp(temporaryFile, originalFile))
}

const fileIsAMaterial = file => file.slice(-3) === 'mtl'

const deleteFile = file => fs.unlink(file, () => {
})

module.exports = simplifyFile
