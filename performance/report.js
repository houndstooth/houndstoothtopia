const fs = require('fs')
const color = require('./color')
const formatLine = require('./formatLine')
const makeSystemKey = require('./makeSystemKey')
const parseResults = require('./parseResults')

const formatRate = rate => rate.toString().slice(0, 6) + '%'

const reportVersusImmediatelyPreviousPerformance = (previousResultsForThisSystem, droppedRate) => {
    const commitNumbers = Object.keys(previousResultsForThisSystem)
    if (commitNumbers.length < 2) {
        console.log(`
This is the first performance test of this app on this system. 
Please run this test again on the next commit that may impact performance to find out whether you made a positive or negative difference.
        `)
    }
    const previousCommitNumber = commitNumbers[commitNumbers.length - 2] // the final entry is the one that was *just* recorded
    const droppedRateOfPreviousCommit = previousResultsForThisSystem[previousCommitNumber]

    if (droppedRateOfPreviousCommit > droppedRate) {
        console.log(color.green(`
With this commit, you have improved performance. 
The frame drop rate has decreased from ${formatRate(droppedRateOfPreviousCommit)} to ${formatRate(droppedRate)}.
        `))
    } else if (droppedRateOfPreviousCommit < droppedRate) {
        console.log(color.magenta(`
With this commit, you have negatively impacted performance. 
The frame drop rate has increased from ${formatRate(droppedRateOfPreviousCommit)} to ${formatRate(droppedRate)}.
        `))
    } else {
        console.log(color.yellow(`
This commit has not changed performance. The frame drop rate holds steady at ${formatRate(droppedRate)}.
        `))
    }
}

const reportVersusBasePerformance = (basePerformances, systemKey) => {
    const basePerformance = basePerformances[systemKey]
    if (!basePerformance) {
        console.log('Base performance of this system is unknown.')
    } else {
        console.log(`Base performance of this system (the best you possibly get on it) is ${formatRate(basePerformance)}.`)
    }
}

const reportVersusHistory = (previousResultsForThisSystem, messages) => {
    console.log('\nHere is the entire recorded history of the frame drop rate on this system:')
    Object.keys(previousResultsForThisSystem).forEach(commitNumber => {
        console.log(formatRate(previousResultsForThisSystem[commitNumber]), '@', messages[commitNumber])
    })
}

const updateReportFile = (resultsByCommitNumberThenSystem, systemKeys) => {
    const definedSystemKeys = Object.keys(systemKeys)
    fs.unlinkSync('./performance/report.tsv')
    fs.appendFileSync('./performance/report.tsv', formatLine(['commit'].concat(definedSystemKeys)))
    Object.entries(resultsByCommitNumberThenSystem).forEach(([commitNumber, resultsBySystem]) => {
        const resultsForThisCommit = definedSystemKeys.map(systemKey => resultsBySystem[systemKey || ''])
        const entryForThisCommit = [commitNumber].concat(resultsForThisCommit)
        fs.appendFileSync('./performance/report.tsv', formatLine(entryForThisCommit))
    })
}

const report = async ([commitNumber, sha, message, browser, os, gpu, droppedRate]) => {
    const {
        resultsBySystemThenCommitNumber,
        resultsByCommitNumberThenSystem,
        basePerformances,
        messages,
        systemKeys
    } = await parseResults()
    updateReportFile(resultsByCommitNumberThenSystem, systemKeys)

    const systemKey = makeSystemKey(os, browser, gpu)
    console.log(`\nAnalyzing performance change for the current system:\n${systemKey}`)

    const previousResultsForThisSystem = resultsBySystemThenCommitNumber[systemKey]

    reportVersusImmediatelyPreviousPerformance(previousResultsForThisSystem, droppedRate)
    reportVersusBasePerformance(basePerformances, systemKey)
    reportVersusHistory(previousResultsForThisSystem, messages)

    console.log(color.cyan('\nResults and report spreadsheets updated.\n'))
}

module.exports = report
