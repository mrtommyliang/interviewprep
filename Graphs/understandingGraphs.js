//   2---0
//  / \
// 1---3

// Edge list
const edgeListGraph = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3]
]

// Adjacent List
const adjacentListGraph = [
  [2],
  [2, 3],
  [0, 1, 3],
  [1, 2]
]

// Adjacent Matrix
const adjacentMatrixGraphV1 = [
  [0, 0, 1, 0],
  [0, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 0]
]

// const adjacentMatrixGraphV2 = [
//   0: [0, 0, 1, 0],
//   1: [0, 0, 1, 1],
//   2: [1, 1, 0, 1],
//   3: [0, 1, 1, 0]
// ]