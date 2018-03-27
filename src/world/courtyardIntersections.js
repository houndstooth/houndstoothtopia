import {COURTYARD_SIZE} from '../space'

const MY_SKETCH_SCALE = 6 * Math.sqrt(2)

const courtyardIntersectionsInTheLeftHalf = {
    [1]: [-8, 12],
    [2]: [-9, 9],
    [3]: [-8, 4],
    [4]: [-15 / 2, 3 / 2],
    [5]: [-36 / 5, 0],
    [6]: [-48 / 7, -12 / 7],
    [7]: [-6, 2],
    [8]: [-6, 0],
    [9]: [-6, -2],
    [10]: [-4, -8],
    [11]: [-18 / 5, -6],
    [12]: [-24 / 7, -36 / 7],
    [13]: [-24 / 5, -12 / 5],
    [14]: [-4, 0],
    [15]: [-24 / 5, 12 / 5],
    [16]: [-30 / 7, 18 / 7],
    [17]: [-18 / 5, 6 / 5],
    [18]: [-3, 0],
    [19]: [-3, -3],
    [20]: [-12 / 5, -24 / 5],
    [21]: [-2, -6],
    [22]: [-2, -10],
    [23]: [-6 / 5, -42 / 5],
    [24]: [-6 / 7, -30 / 7],
    [25]: [-6 / 5, -18 / 5],
    [26]: [-2, -2],
    [27]: [-18 / 7, -6 / 7],
    [28]: [-12 / 5, 0],
    [29]: [-3, 3],
    [30]: [-12 / 5, 24 / 5],
    [31]: [-2, 6],
    [32]: [-6 / 5, 6],
    [33]: [-3 / 2, 9 / 2],
    [34]: [-12 / 7, 24 / 7],
    [35]: [-2, 2],
}

const offsetToNewIntersectionNumber = intersectionNumber => parseInt(intersectionNumber) + 40

const flipToOtherHalf = position => [-position[0], position[1]]

const courtyardIntersectionsInTheRightHalf = Object.entries(courtyardIntersectionsInTheLeftHalf).reduce((ciitrh, [intersectionNumber, intersection]) => {
  ciitrh[offsetToNewIntersectionNumber(intersectionNumber)] = flipToOtherHalf(intersection)
  return ciitrh
}, {})

const courtyardIntersectionsDownTheCenterLine = {
    [36]: [0, 6],
    [37]: [0, -6],
    [38]: [0, -4],
    [39]: [0, 0],
    [40]: [0, 4],
}

const courtyardIntersections = Object.assign(
  {},
  courtyardIntersectionsInTheLeftHalf,
  courtyardIntersectionsInTheRightHalf,
  courtyardIntersectionsDownTheCenterLine
)

const scale = position => position.map(coordinate => coordinate * COURTYARD_SIZE / MY_SKETCH_SCALE)

const rotate = position => {
    const sin = Math.sin(Math.PI / 4)
    const cos = Math.cos(Math.PI / 4)
    const relativeX = position[0]
    const relativeY = position[1]

    return [
        relativeX * cos - relativeY * sin,
        relativeX * sin + relativeY * cos,
    ]
}

const getPosition = intersection => {
  const position = scale(rotate(courtyardIntersections[intersection]))
  return [position[0], 0, position[1]]
}

export {
    getPosition,
}
