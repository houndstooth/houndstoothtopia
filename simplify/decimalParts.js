const knownDecimalPartsToSnapToByPrecision = require('./knownDecimalPartsToSnapToByPrecision')
const findClosest = require('./findClosest')

const decimalParts = (value, precision) => {
    const decimalPartOfValue = Math.abs(value % 1)
    const knownDecimalPartsToSnapTo = knownDecimalPartsToSnapToByPrecision[precision]
    const closestKnownDecimalPartToSnapTo = findClosest(decimalPartOfValue, knownDecimalPartsToSnapTo)

    return {decimalPartOfValue, closestKnownDecimalPartToSnapTo}
}

module.exports = decimalParts
