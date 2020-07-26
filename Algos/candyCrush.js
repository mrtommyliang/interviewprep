/*
his question is about implementing a basic elimination algorithm
for Candy Crush.

Given a 2 D integer array board representing the grid of candy, different positive integers board[i][j] represent different types of candies.A value of board[i][j] = 0 represents that the cell at position(i, j) is empty.The given board represents the state of the game following the player 's move. Now, you need to restore the board to a stable state by crushing candies according to the following rules:

If three or more candies of the same type are adjacent vertically or horizontally, "crush"
them all at the same time - these positions become empty.
After crushing all candies simultaneously,
if an empty space on the board has candies on top of itself, then these candies will drop until they hit a candy or bottom at the same time.(No new candies will drop outside the top boundary.)
After the above steps, there may exist more candies that can be crushed.If so, you need to repeat the above steps.
If there does not exist more candies that can be crushed(ie.the board is stable), then
return the current board.
You need to perform the above rules until the board becomes stable, then
return the current board.



Example:
Input:
  board = [
    [110, 5, 112, 113, 114],
    [210, 211, 5, 213, 214],
    [310, 311, 3, 313, 314],
    [410, 411, 412, 5, 414],
    [5, 1, 512, 3, 3],
    [610, 4, 1, 613, 614],
    [710, 1, 2, 713, 714],
    [810, 1, 2, 1, 1],
    [1, 1, 2, 2, 2],
    [4, 1, 4, 4, 1014]
  ]

Output: [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [110, 0, 0, 0, 114],
  [210, 0, 0, 0, 214],
  [310, 0, 0, 113, 314],
  [410, 0, 0, 213, 414],
  [610, 211, 112, 313, 614],
  [710, 311, 412, 613, 714],
  [810, 411, 512, 713, 1014]
]

*/

const candyCrush = (board) => {
  mark(board)
  while(!isStable(board)) {
    crush(board)
    mark(board)
  }
  return board
}

const mark = (board) => {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      let fixed = Math.abs(board[row][col])
      if (board[row + 1] &&
        (Math.abs(board[row + 1][col]) === fixed) &&
        (board[row - 1] &&
          Math.abs(board[row - 1][col]) === fixed)) {
        board[row - 1][col] = -Math.abs(board[row - 1][col])
        board[row][col] = -Math.abs(board[row][col])
        board[row + 1][col] = -Math.abs(board[row + 1][col])
      }
      if (Math.abs(board[row][col + 1]) === fixed && Math.abs(board[row][col - 1]) === fixed) {
        board[row][col + 1] = -Math.abs(board[row][col + 1])
        board[row][col] = -Math.abs(board[row][col])
        board[row][col - 1] = -Math.abs(board[row][col - 1])
      }
    }
  }
}

const isStable = (board) => {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] < 0) return false
    }
  }
  return true
}

const crush = (board) => {
  for (let col = 0; col < board[0].length; col++) {
    let stack = []
    for (let row = 0; row < board.length; row++) {
      if (board[row][col] > 0) {
        stack.push(board[row][col])
      }
    }
    let bottomInd = board.length - 1
    while (stack.length) {
      board[bottomInd][col] = stack.pop()
      bottomInd--
    }
    while (bottomInd >= 0) {
      board[bottomInd][col] = 0
      bottomInd--
    }
  }
}

board = [
  [110, 5, 112, 113, 114],
  [210, 211, 5, 213, 214],
  [310, 311, 3, 313, 314],
  [410, 411, 412, 5, 414],
  [5, 1, 512, 3, 3],
  [610, 4, 1, 613, 614],
  [710, 1, 2, 713, 714],
  [810, 1, 2, 1, 1],
  [1, 1, 2, 2, 2],
  [4, 1, 4, 4, 1014]
]