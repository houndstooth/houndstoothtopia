const os = require('os')
const getCmdOutput = require('./getCmdOutput')

let gpuFindingCmd
const platform = os.platform()
if (platform === 'darwin') {
    gpuFindingCmd = `system_profiler SPDisplaysDataType | sed -e 's/:/ /' | sed -n '3 p'`
} else if (platform === 'win32') {
    gpuFindingCmd = `wmic path win32_VideoController get name | sed -e 's/Name//' | sed -e 's/[\\r\\n]//'`
}
const gpu = gpuFindingCmd ? getCmdOutput(gpuFindingCmd).trim() : 'unknown'

module.exports = gpu
