/**
 * // Definition for a QuadTree node.
 * function _Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {_Node}
 */
var construct = function(grid) {
    return recursive(grid, 0, 0, grid.length, grid[0].length);
};

function recursive(grid, r0, c0, r1, c1) {
    let same = true;
    for (let i = r0; i < r1; i++) {
        for (let j = c0; j < c1; j++) {
            if (grid[i][j] !== grid[r0][c0]) {
                same = false;
                break;
            }
        }
        if (!same) {
            break;
        }
    }

    if (same) {
        return new Node(grid[r0][c0] === 1, true);
    }

    return new Node(
        true,
        false,
        recursive(grid, r0, c0, Math.floor((r0 + r1) / 2), Math.floor((c0 + c1) / 2)),
        recursive(grid, r0, Math.floor((c0 + c1) / 2), Math.floor((r0 + r1) / 2), c1),
        recursive(grid, Math.floor((r0 + r1) / 2), c0, r1, Math.floor((c0 + c1) / 2)),
        recursive(grid, Math.floor((r0 + r1) / 2), Math.floor((c0 + c1) / 2), r1, c1),
    )
}