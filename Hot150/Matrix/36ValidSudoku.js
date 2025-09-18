/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // horizontal
    for (let i = 0; i < 9; i++) {
        let map = new Array(9);
        for (let j = 0; j < 9; j++) {
            const chara = board[i][j];
            if (chara === '.') {
                continue;
            }
            let number = chara.charCodeAt(0) - '1'.charCodeAt(0);
            if (map[number] === 0 || map[number] === undefined) {
                map[number] = 1;
            } else {
                return false;
            }
        }
    }

    // vertical
    for (let i = 0; i < 9; i++) {
        let map = new Array(9);
        for (let j = 0; j < 9; j++) {
            const chara = board[j][i];
            if (chara === '.') {
                continue;
            }
            let number = chara.charCodeAt(0) - '1'.charCodeAt(0);
            if (map[number] === 0 || map[number] === undefined){
                map[number] = 1;
            } else {
                return false;
            }
        }
    }

    // 3 X 3
    for (let i = 0; i < 9; i++) {
        let map = new Array(9);
        let startRow = Math.floor(i / 3) * 3;
        let startCol = (i % 3) * 3;
        for (let j = startRow; j < startRow + 3; j++) {
            for (let k = startCol; k < startCol + 3; k++) {
                const chara = board[j][k];
                if (chara === '.') {
                    continue;
                }
                let number = chara.charCodeAt(0) - '1'.charCodeAt(0);
                if (map[number] === 0 || map[number] === undefined) {
                    map[number] = 1;
                } else {
                    return false;
                }
            }
        }
    }
    return true;
};

var betterIsValidSudoku = function(board) {
    const rowHas = Array.from({ length: 9 }, () => Array(9).fill(false)); // rowHas[i][x] means if i row has x
    const colHas = Array.from({ length: 9 }, () => Array(9).fill(false)); // colHas[j][x] means if j col has x
    const subBoxHas = Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => Array(9).fill(false))); // subBoxHas[i'][j'][x] means if the following block has x

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const b = board[i][j];
            if (b === '.') {
                continue;
            }
            const x = b.charCodeAt(0) - '1'.charCodeAt(0); // turn '1 - 9'  to '0 - 8'
            if (rowHas[i][x] || colHas[j][x] || subBoxHas[Math.floor(i / 3)][Math.floor(j / 3)][x]) { // repetition
                return false;
            }
            // mark
            rowHas[i][x] = colHas[j][x] = subBoxHas[Math.floor(i / 3)][Math.floor(j / 3)][x] = true;
        }
    }

    return true;
};

let board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]

isValidSudoku(board);