/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
  let topBottom = [], leftRight = [], gridNew = [];
  for (let i = 0; i < grid.length; i++) {
    leftRight.push(Math.max(...grid[i]));
    for (let j = 0; j < grid[i].length; j++) {
      if (topBottom[j] === undefined || topBottom[j] < grid[i][j]) {
        topBottom[j] = grid[i][j];
      }
    }
  }
  for (let i = 0; i < grid.length; i++) {
    gridNew[i] = [];
    for (let j = 0; j < grid[i].length; j++) {
      gridNew[i][j] = Math.min(topBottom[j], leftRight[i]);
    }
  }
  return gridNew;
  
};

console.log(maxIncreaseKeepingSkyline([[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]));
