/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const FLAG = 'T'
    const RIGHT = 'O';
    const CROSS = 'X';

    function dfs(board, i, j) {
        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] !== RIGHT) {
            return;
        }
        board[i][j] = FLAG;        dfs(board, i - 1, j);
        dfs(board, i + 1, j);
        dfs(board, i, j - 1);
        dfs(board, i, j + 1);
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            console.log(3 !== 0, board[3][1]);
            if ((i !== 0 && i !== board.length - 1 && j !== 0 && j !== board[0].length - 1) || board[i][j] !== RIGHT) {
                continue;
            }
            if (board[i][j] === RIGHT) {
                dfs(board, i, j);
            }
        }
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === FLAG) {
                board[i][j] = RIGHT;
            } else {
                board[i][j] = CROSS;
            }
        }
    }
};

const board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
solve(board);
console.log(board);