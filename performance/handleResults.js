const fs = require('fs')
const calculateDroppedRate = require('./calculateDroppedRate')
const gpu = require('./gpu')
const {commitNumber, sha, message} = require('./git')
const agent = require('./agent')
const report = require('./report')
const formatLine = require('./formatLine')

const handleResults = req => {
    const {browser, os} = agent(req)

    req.on('data', chunk => {
        const data = JSON.parse(chunk)
        const droppedRate = calculateDroppedRate(data)
        const fps = data.fps
        const recordings = data.recordings.toString()

        const results = [commitNumber, sha, message, browser, os, gpu, droppedRate, fps, recordings]

        fs.appendFileSync(`./performance/results.tsv`, formatLine(results))

        report(results)
    })
}

module.exports = handleResults
