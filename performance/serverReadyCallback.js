const color = require('./color')
const basePerformanceMessage = require('./basePerformanceMessage')

const serverReadyCallback = () => {
    console.log(`
Performance testing server up!${basePerformanceMessage}

Open ${color.yellow('http://localhost:8080')} in any browsers you'd like to test.

As soon as you enter VR, performance testing will begin.
If your system does not support VR, recording will begin automatically after 5 seconds.

Please keep focus on the browser tab for most accurate results.

In a few moments, you'll be notified here.
The result will be saved in ${color.yellow('\`./performance/results.tsv\`')}.
An overall report will be updated in ${color.yellow('\`./performance/report.tsv\`')}.
    `)
}

module.exports = serverReadyCallback
