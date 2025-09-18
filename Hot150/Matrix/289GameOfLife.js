/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    // use extra states
    const neighbours = [[1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1]];
    const rowLen = board.length;
    const colLen = board[0].length;

    const BothLive = 1;
    const BothDead = 0;
    const LivedButDead = -1;
    const DiedButLive = 2;

    for (let i = 0; i < rowLen; i++) {
        for (let j = 0; j < colLen; j++) {
            let liveNeighbours = 0;
            for (let neighbour of neighbours) {
                let row = i + neighbour[0];
                let col = j + neighbour[1];

                if (row < rowLen && row >= 0 && col < colLen && col >= 0 && (board[row][col] === BothLive || board[row][col] === LivedButDead)) {
                    liveNeighbours += 1;
                }
            }

            if (board[i][j] === 1 && (liveNeighbours < 2 || liveNeighbours > 3)) {
                board[i][j] = -1;
            }
            if (board[i][j] === 0 && liveNeighbours === 3) {
                board[i][j] = 2;
            }
        }
    }

    for (let i = 0; i < rowLen; i++) {
        for (let j = 0; j < colLen; j++) {
            if (board[i][j] === BothLive || board[i][j] === DiedButLive) {
                board[i][j] = BothLive;
            } else {
                board[i][j] = BothDead;
            }
        }
    }
};