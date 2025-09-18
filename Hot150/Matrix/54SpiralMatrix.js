const DIRS = [[0, 1], [1, 0], [0, -1], [-1, 0]];

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {

    const rowLen = matrix.length;
    const colLen = matrix[0].length;
    const ans = Array(rowLen * colLen);

    let i = 0, j = 0, di = 0;
    for (let k = 0; k < rowLen * colLen; k++) {
        ans[k] = matrix[i][j];
        matrix[i][j] = Infinity;
        let x = i + DIRS[di][0];
        let y = j + DIRS[di][1]; // the position of next step
        // if (x, y) is out of border or visited
        if (x < 0 || x >= rowLen || y < 0 || y >= colLen || matrix[x][y] === Infinity) {
            di = (di + 1) % 4; //  turn right for 90 degree
        }
        i += DIRS[di][0];
        j += DIRS[di][1];
    }
    return ans;
};

var betterSpiralOrder = function(matrix) {
    let m = matrix.length, n = matrix[0].length;
    const size = m * n;
    const ans = [];
    let i = 0, j = - 1 // Start from (0, -1)
    for (let di = 0; ans.length < size; di = (di + 1) % 4) {
        for (let k = 0; k < n; k++) { // move n steps and n will decrease
            i += DIRS[di][0];
            j += DIRS[di][1];
            ans.push(matrix[i][j]);
        }
        [n, m] = [m - 1, n]; // decrease the rest cycles
    }
    return ans;
}