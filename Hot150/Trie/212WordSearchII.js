class TrieNode {
    constructor() {
        this.s = null;
        this.children = new Array(26).fill(null);
    }
}

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    const m = board.length;
    if (m === 0) {
        return [];
    }
    const n = board[0].length;

    const root = new TrieNode();

    function insert(str) {
        let p = root;
        for (let i = 0; i < str.length; i++) {
            const u = str.charCodeAt(i) - 'a'.charCodeAt(0);
            if (p.children[u] === null) {
                p.children[u] = new TrieNode();
            }
            p = p.children[u];
        }
        p.s = str;
    }

    for (const w of words) {
        insert(w);
    }

    const res = new Set();
    const visited = Array.from({length: m}, () => Array(n).fill(false));
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    function dfs(i, j, node) {
        if (node.s !== null) {
            res.add(node.s);
            node.s = null;
        }
        for (const [dx, dy] of dirs) {
            const x = i + dx, y = j + dy;
            if (x < 0 || x >= m || y < 0 || y >= n) {
                continue;
            }
            if (visited[x][y]) {
                continue;
            }
            const u = board[x][y].charCodeAt(0) - 'a'.charCodeAt(0);
            const next = node.children[u];
            if (next !== null) {
                visited[x][y] = true;
                dfs(x, y, next);
                visited[x][y] = false;
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const u = board[i][j].charCodeAt(0) - 'a'.charCodeAt(0);
            const next = root.children[u];
            if (next !== null) {
                visited[i][j] = true;
                dfs(i, j, next);
                visited[i][j] = false;
            }
        }
    }

    return Array.from(res);
};