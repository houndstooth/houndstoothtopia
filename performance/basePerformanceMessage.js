const color = require('./color')

const basePerformanceMessage = process.env.PERFORMANCE_TEST_BASE_PERFORMANCE ? `
${color.magenta('You are in base performance mode, testing only this machine\'s capacity to request 90 frames a second at all.')}
Expect the screen to be black because the renderer is not even rendering.
` : ''

module.exports = basePerformanceMessage
