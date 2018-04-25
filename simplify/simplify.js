const fs = require('fs')
const simplifyFile = require('./simplifyFile')

fs.readdir('./geometry', (_, files) => files.forEach(simplifyFile))
