const http = require('http')
const startUpAppUnderTest = require('./startUpAppUnderTest')
const handleResults = require('./handleResults')
const serverReadyCallback = require('./serverReadyCallback')
const color = require('./color')

const OKAY = 200

startUpAppUnderTest()

http.createServer((req, res) => {
    res.writeHead(OKAY, {'Access-Control-Allow-Origin': '*'})

    if (req.url === '/connected') {
        console.log(color.cyan('Recording now. Give it ~15 seconds...'))
    } else {
        console.log(color.green('Done recording!'))
        handleResults(req)
    }
}).listen(8081, serverReadyCallback)
