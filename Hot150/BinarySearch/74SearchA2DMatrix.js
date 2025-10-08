/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const m = matrix.length, n = matrix[0].length;
    for (let i = 0; i < m; i++) {
        if (target > matrix[i][n - 1]) {
            continue;
        }
        if (target < matrix[i][0]) {
            return false;
        }
        let left = 0, right = n - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (target > matrix[i][mid]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        if (matrix[i][left] === target) {
            return true;
        }
    }
    return false;
};

var betterSearchMatrix =  function(matrix, target) {
    const m = matrix.length, n = matrix[0].length;
    let i = 0, j = n - 1;
    while (i < m && j >= 0) { // There are still remaining elements
        if (matrix[i][j] === target) {
            return true;
        }
        if (matrix[i][j] < target) {
            i++; // all other elements in this row are smaller than target
        } else {
            j--; // all other elements in this column are bigger than target
        }
    }
    return false;
}

const matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];
const target = 3;
console.log(searchMatrix(matrix, target));