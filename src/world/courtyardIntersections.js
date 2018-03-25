const baseIntersections = {
    [1]: [-8, -12],
    [2]: [-9, -9],
    [3]: [-8, -4],
    [4]: [-15 / 2, -3 / 2],
    [5]: [-36 / 5, 0],
    [6]: [-48 / 7, 12 / 7],
    [7]: [-6, -2],
    [8]: [-6, 0],
    [9]: [-6, 2],
    [10]: [-4, 8],
    [11]: [-18 / 5, 6],
    [12]: [-24 / 7, 36 / 7],
    [13]: [-24 / 5, 12 / 5],
    [14]: [-4, 0],
    [15]: [-24 / 5, -12 / 5],
    [16]: [-30 / 7, -18 / 7],
    [17]: [-18 / 5, -6 / 5],
    [18]: [-3, 0],
    [19]: [-3, 3],
    [20]: [-12 / 5, 24 / 5],
    [21]: [-2, 6],
    [22]: [-2, 10],
    [23]: [-6 / 5, 42 / 5],
    [24]: [-6 / 7, 30 / 7],
    [25]: [-6 / 5, 18 / 5],
    [26]: [-2, 2],
    [27]: [-18 / 7, 6 / 7],
    [28]: [-12 / 5, 0],
    [29]: [-3, -3],
    [30]: [-12 / 5, -24 / 5],
    [31]: [-2, -6],
    [32]: [-6 / 5, -6],
    [33]: [-3 / 2, -9 / 2],
    [34]: [-12 / 7, -24 / 7],
    [35]: [-2, -2],
}

const courtyardIntersections = {
    [36]: [0, 6],
    [37]: [0, -6],
    [38]: [0, -4],
    [39]: [0, 0],
    [40]: [0, 4],
}

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
    const applyWorldScale = alsoNeedToScaleByRoot2SinceRotated.map(coord => coord * 666)
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
