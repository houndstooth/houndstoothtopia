const fs = require('fs')
const parse = require('csv-parse')
const makeSystemKey = require('./makeSystemKey')
const {NOT_APPLICABLE, BASE_PERFORMANCE_MESSAGE} = require('./constants')

const parseResults = () => {
    const resultsBySystemThenCommitNumber = {}
    const resultsByCommitNumberThenSystem = {}
    const basePerformances = {}
    const messages = {}
    const systemKeys = {}

    const data = fs.readFileSync('./performance/results.tsv', 'utf8')

    const parser = parse({delimiter: '\t'})

    parser.on('readable', () => {
        let entry
        while (entry = parser.read()) {
            const [commitNumber, _, message, browser, os, gpu, droppedRate] = entry
            const systemKey = makeSystemKey(os, browser, gpu)

            if (commitNumber !== 'commit number' && commitNumber !== NOT_APPLICABLE) {
                const commitNumberParsed = parseInt(commitNumber)
                if (!resultsBySystemThenCommitNumber[systemKey]) resultsBySystemThenCommitNumber[systemKey] = {}
                resultsBySystemThenCommitNumber[systemKey][commitNumberParsed] = droppedRate

                if (!resultsByCommitNumberThenSystem[commitNumberParsed]) resultsByCommitNumberThenSystem[commitNumberParsed] = {}
                resultsByCommitNumberThenSystem[commitNumberParsed][systemKey] = droppedRate

                systemKeys[systemKey] = 'defined'

                messages[commitNumber] = message
            } else if (message === BASE_PERFORMANCE_MESSAGE) {
                basePerformances[systemKey] = droppedRate
            }
        }
    })

    parser.write(data)
    parser.end()

    return new Promise(resolve => {
        parser.on('finish', () => {
            resolve({
                resultsBySystemThenCommitNumber,
                resultsByCommitNumberThenSystem,
                basePerformances,
                messages,
                systemKeys,
            })
        })
    })
}

module.exports = parseResults
