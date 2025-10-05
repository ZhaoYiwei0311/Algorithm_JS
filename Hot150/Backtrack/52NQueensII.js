/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let ans = 0;
    const col = Array(n).fill(false);
    const diag1 = Array(n * 2 - 1).fill(false);
    const diag2 = Array(n * 2 - 1).fill(false);

    function backtrack(row) {
        if (row === n) {
            ans++;
            return;
        }
        for (let c = 0; c < n; c++) {
            // from top left to bottom right
            const rc = row - c + n - 1;
            if (!col[c] && !diag1[row + c] && !diag2[rc]) {
                col[c] = diag1[row + c] = diag2[rc] = true;
                backtrack(row + 1);
                col[c] = diag1[row + c] = diag2[rc] = false;
            }
        }
    }

    backtrack(0);
    return ans;
};