/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const cnt = new Map();
    for (const row of board) {
        for (const c of row) {
            cnt.set(c, (cnt.get(c) ?? 0) + 1);
        }
    }

    // optimization 1
    const wordCnt = new Map();
    for (const c of word) {
        wordCnt.set(c, (wordCnt.get(c) ?? 0) + 1);
        if (wordCnt.get(c) > (cnt.get(c) ?? 0)) {
            return false;
        }
    }

    // optimization 2
    if ((cnt.get(word[word.length - 1]) ?? 0) < (cnt.get(word[0]) ?? 0)) {
        word = word.split('').reverse();
    }

    const m = board.length, n = board[0].length;

    function backtrack(row, col, k) {
        if (board[row][col] !== word[k]) {
            return false;
        }
        if (k + 1 === word.length) {
            return true;
        }
        board[row][col] = 0 // mark as visited
        for (const [x, y] of [[row, col - 1], [row, col + 1], [row - 1, col], [row + 1, col]]) {
            if (x >= 0 && x < m && y >= 0 && y < n && backtrack(x, y, k + 1)) {
                return true;
            }
        }
        board[row][col] = word[k]; // return
        return false;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (backtrack(i, j, 0)) {
                return true;
            }
        }
    }
    return false;

};