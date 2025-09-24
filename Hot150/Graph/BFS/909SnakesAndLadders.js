/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function (board) {
    const n = board.length;
    const visited = new Array(n * n + 1).fill(false);
    visited[1] = false;
    let q = [1];
    for (let step = 0; q.length > 0; step++) {
        const temp = q;
        q = [];
        for (const x of temp) {
            if (x === n * n) { // destination
                return step;
            }
            for (let y = x + 1; y <= Math.min(x + 6, n * n); y++) {
                let row = Math.floor((y - 1) / n);
                let col = (y - 1) % n;
                if (row % 2 > 0) {
                    col = n - 1 - col;
                }
                let next = board[n - 1 - row][col];
                if (next < 0) { // no ladder or snake
                    next = y;
                }
                if (!visited[next]) {
                    visited[next] = true; // avoid dead loop
                    q.push(next);
                }
            }
        }
    }
    return -1;
};

let board = [[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,35,-1,-1,13,-1],[-1,-1,-1,-1,-1,-1],[-1,15,-1,-1,-1,-1]];
let number = snakesAndLadders(board);
console.log(number);