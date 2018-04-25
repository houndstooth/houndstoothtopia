const decimalParts = require('./decimalParts')

const snapValue = (value, precision) => {
    const {closestKnownDecimalPartToSnapTo} = decimalParts(value, precision)

    const valueWithDecimalPartReplacedButNegativityInformationLost = replaceDecimalPartButLoseNegativityInformationInTheProcess(
        value,
        closestKnownDecimalPartToSnapTo
    )

    return valueWithDecimalPartReplacedButNegativityInformationLost * negativity(value)
}

const replaceDecimalPartButLoseNegativityInformationInTheProcess = (value, newDecimalPart) => {
    return Math.floor(Math.abs(value)) + newDecimalPart
}

const negativity = value => value < 0 ? -1 : 1

module.exports = snapValue
