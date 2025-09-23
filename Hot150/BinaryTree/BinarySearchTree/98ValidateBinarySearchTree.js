/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    let prev = -Infinity;
    let isValid = true;

    function dfs(node) {
        if (!node) {
            return;
        }
        dfs(node.left);
        if (node.val <= prev) {
            isValid = false;
        }
        prev = node.val;
        dfs(node.right);
    }

    dfs(root);
    return isValid;
};

var postOrderIsValidBST = function(root) {
    function dfs(node) {
        if (node == null) {
            return [Infinity, -Infinity];
        }
        const [lMin, lMax] = dfs(node.left);
        const [rMin, rMax] = dfs(node.right);
        const x = node.val;

        if (x <= lMax || x >= rMin) {
            return [-Infinity, Infinity];
        }
        return [Math.min(lMin, x), Math.max(rMax, x)];
    }
    return dfs(root)[1] !== Infinity;
};