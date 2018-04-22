const getCmdOutput = require('./getCmdOutput')
const {NOT_APPLICABLE, BASE_PERFORMANCE_MESSAGE} = require('./constants')

const git = {}
if (process.env.PERFORMANCE_TEST_BASE_PERFORMANCE) {
    git.commitNumber = NOT_APPLICABLE
    git.sha = NOT_APPLICABLE
    git.message = BASE_PERFORMANCE_MESSAGE
} else {
    git.commitNumber = getCmdOutput('git rev-list HEAD --count')
    git.sha = getCmdOutput('git rev-parse HEAD')
    git.message = getCmdOutput(`git log --format=%B -n 1 ${git.sha}`).toString().split('\n')[0]
}

module.exports = git
