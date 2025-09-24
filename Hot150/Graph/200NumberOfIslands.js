/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {


    let ans = 0;
    const FLAG = '2';
    const ISLAND = '1';
    const SEA = '0';

    function flood(grid, i, j) {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] !== ISLAND) {
            return
        }
        grid[i][j] = FLAG;
        flood(grid, i - 1, j);
        flood(grid, i + 1, j);
        flood(grid, i, j - 1);
        flood(grid, i, j + 1);
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === ISLAND) {
                // BFS
                flood(grid, i, j);
                ans++
            }
        }
    }
    return ans;
}



const grid = [["1","1","1"],["0","1","0"],["1","1","1"]];
let number = numIslands(grid);
console.log(number);