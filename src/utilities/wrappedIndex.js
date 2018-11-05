const wrappedIndex = (array, index) => {
    let i
    if (index < 0) {
        i = array.length - Math.abs(index) % array.length
        if (i === array.length) {
            i = 0
        }
    }
    else {
        i = index % array.length
    }

    return array[i]
}

export default wrappedIndex
