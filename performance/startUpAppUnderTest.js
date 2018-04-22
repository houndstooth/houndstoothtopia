const cp = require('child_process')

const startUpAppUnderTest = () => {
    cp.exec('webpack-dev-server', {
        env: Object.assign({}, process.env, {
            'PERFORMANCE_TEST': true,
            'PERFORMANCE_TEST_BASE_PERFORMANCE': process.env.PERFORMANCE_TEST_BASE_PERFORMANCE === 'true' || '',
        })
    })
}

module.exports = startUpAppUnderTest
