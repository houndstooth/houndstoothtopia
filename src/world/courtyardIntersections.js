const baseIntersections = {
    [1]: [-8, -12],
    [2]: [-9, -9],
    [3]: [-8, -4],
    [4]: [],
    [7]: [-6, -2],
}

const courtyardIntersections = {}

Object.entries(baseIntersections).forEach(([k, v]) => {
    courtyardIntersections[k] = v
    courtyardIntersections[parseInt(k) + 40] = [v[0] * -1, v[1]]
})

const getPosition = intersection => {
    const raw = courtyardIntersections[intersection]
    const undoMySketchScale = raw.map(coord => coord / 6)
    const flipAxisForSomeReason = [undoMySketchScale[0], undoMySketchScale[1] * -1]
    const undoMySketchRotation = rotate(flipAxisForSomeReason, Math.PI / 4)
    const alsoNeedToScaleByRoot2SinceRotated = undoMySketchRotation.map(coord => coord / Math.sqrt(2))
    const applyWorldScale = alsoNeedToScaleByRoot2SinceRotated.map(coord => coord * 500)
    const includeZAndOrganizeY = [applyWorldScale[0], 0, applyWorldScale[1]]

    return includeZAndOrganizeY
}

const rotate = (point, rotation) => {
    const sin = Math.sin(rotation)
    const cos = Math.cos(rotation)
    const relativeX = point[0]
    const relativeY = point[1]

    return [
        relativeX * cos - relativeY * sin,
        relativeX * sin + relativeY * cos,
    ]
}

export {
    getPosition,
}

