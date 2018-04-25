const baseDecimalParts = [
    0,
    0.5,
    0.333333,
    0.25,
    0.2,
    0.4,
    0.166667,
    0.142857,
    0.285714,
    0.428571,
    0.125,
    0.375,
    0.111111,
    0.222222,
    0.444444,
    0.1,
    0.3,
    0.414214, // sqrt 2
    0.828427, // sqrt 2 * 2
    0.707107, // sqrt 2 * 1/2
    0.121320, // sqrt 2 * 3/2
    0.353554, // sqrt 2 * 1/4
    0.146446, // (2 - sqrt 2) * 1/4
    0.732051, // sqrt 3
    0.242641, // sqrt 2 * 3
    0.485281, // sqrt 2 * 6
    0.727922, // sqrt 2 * 9
    0.970562, // sqrt 2 * 12
    0.154701, // 2 * sqrt(1/3)
    0.788676, // (3 + sqrt(3)) / 6
    0.408248, // sqrt (2/3) / 2
    0.816497, // sqrt (2/3)
    0.577350, // sqrt (1/3)
    0.894338, // 1/12(9 + sqrt(3))
    0.447169, // 1/24(9 + sqrt(3))
]

const knownValuesToSnapTo = baseDecimalParts
    .concat(baseDecimalParts.map(decimalPart => 1 - decimalPart)).sort()

const knownDecimalPartsToSnapToByPrecision = {
    [5]: knownValuesToSnapTo,
    [3]: knownValuesToSnapTo.map(baseDecimal => parseFloat(baseDecimal.toPrecision(4)))
}

module.exports = knownDecimalPartsToSnapToByPrecision
