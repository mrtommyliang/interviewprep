/**
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.



Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
*/

const numIslands = (grid) => {
  let counter = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        counter++;
        dfs(grid, i, j);
      }
    }
  }
  return counter;
};

const dfs = (grid, i, j) => {
  if (i >= 0 && i < grid.length && j >= 0 && j < grid[0].length && grid[i][j] == '1') {
    grid[i][j] = '0'
    const directions = [
      [i + 1, j],
      [i - 1,j],
      [i, j + 1],
      [i, j - 1]
    ]

    for (let [x,y] of directions) {
      dfs(grid, x, y)
    }
  }
}