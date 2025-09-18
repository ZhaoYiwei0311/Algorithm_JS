/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    // 1.look vertically
    //  0 row to 0 col
    //  1 row to 1 col
    //  ...
    //  n - 1 row to n - 1 col
    // 2.look horizontally
    //  0 row to n - 1 col
    //  1 row to n - 2 col
    //  n - 1 row to n - 1 - (n - 1) col
    // So we will finally get(i, j) -> (j, n - 1 - i)
    //  1.transpose: (i, j) to (j, 1)
    //  2.row flip: (j, i) to (j, n - 1 - i)
    const n = matrix.length;
    // 1.transpose
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            const tmp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = tmp;
        }
    }
    // 2.row flip
    for (const row of matrix) {
        row.reverse();
    }
};