const shouldSnapValue = require('./shouldSnapValue')
const snapValue = require('./snapValue')

const DIGIT_COUNT = 8
const DIGIT_COUNT_INCLUDING_NEGATIVE_SIGN = DIGIT_COUNT + 1

const maybeSnapValue = (value, precision) => {
    const result = shouldSnapValue(value, precision) ? snapValue(value, precision) : value

    return format(result, digitCount(value))
}

const format = (result, digitCount) => result.toString().slice(0, digitCount)

const digitCount = value => value < 0 ? DIGIT_COUNT_INCLUDING_NEGATIVE_SIGN : DIGIT_COUNT

module.exports = maybeSnapValue
