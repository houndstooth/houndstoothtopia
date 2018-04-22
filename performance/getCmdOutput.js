const cp = require('child_process')

const getCmdOutput = cmd => cp.execSync(cmd).slice(0, -1).toString()

module.exports = getCmdOutput
