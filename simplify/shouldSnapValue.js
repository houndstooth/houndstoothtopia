const decimalParts = require('./decimalParts')

const shouldSnapValue = (value, precision) => {
    const {decimalPartOfValue, closestKnownDecimalPartToSnapTo} = decimalParts(value, precision)

    const pow = Math.pow(10, precision + 1)

    const maxDelta = Math.pow(10, -precision) / 2

    return deltaByPrecision(decimalPartOfValue, closestKnownDecimalPartToSnapTo, pow) <= maxDelta
}

const deltaByPrecision = (a, b, pow) => Math.round(Math.abs(a - b) * pow) / pow

module.exports = shouldSnapValue
