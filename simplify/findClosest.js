const findClosest = (value, array) => {
    let mid
    let lo = 0
    let hi = array.length - 1
    while (hi - lo > 1) {
        mid = Math.floor((lo + hi) / 2)
        if (array[mid] < value) {
            lo = mid
        } else {
            hi = mid
        }
    }
    if (value - array[lo] <= array[hi] - value) {
        return array[lo]
    }
    return array[hi]
}

module.exports = findClosest
