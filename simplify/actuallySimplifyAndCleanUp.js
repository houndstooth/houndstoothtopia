const cp = require('child_process')
const os = require('os')
const fs = require('fs')

const macSedTweak = os.platform() === 'win32' ? '' : '\'\' -e '

const actuallySimplify = (temporaryFile, originalFile) => {
    cp.execSync(`obj-simplify -in ${temporaryFile} -out ${originalFile}`, {
        stdio: 'inherit',
        stderr: 'inherit',
        shell: true
    })
}

const deleteFile = file => fs.unlinkSync(file)

const cleanUp = file => {
    cp.execSync(`sed -i ${macSedTweak}'/^[#lmosu].*$/d' ${file}`, {
        stdio: 'inherit',
        stderr: 'inherit',
        shell: true
    })
}

const removeFirstLine = file => {
    fs.readFile(file, 'utf8', (err, data) => {
        const linesExceptFirst = data.split('\n').filter(line => line !== '').join('\n')
        fs.writeFile(file, linesExceptFirst, () => {
        })
    }, () => {
    })
}

const actuallySimplifyAndCleanUp = (temporaryFile, originalFile) => {
    actuallySimplify(temporaryFile, originalFile)
    deleteFile(temporaryFile)
    cleanUp(originalFile)
    removeFirstLine(originalFile)
}

module.exports = actuallySimplifyAndCleanUp
