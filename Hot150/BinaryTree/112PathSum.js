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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    function dfs(node, sum, targetSum) {
        if (node === null) {
            return false;
        }
        if (node.left === null && node.right === null) { // arrived leaf
            return node.val + sum === targetSum;
        }
        return dfs(node.left, sum + node.val, targetSum) || dfs(node.right, sum + node.val, targetSum);
    }
    return dfs(root, 0, targetSum);
};

var betterHasPathSum = function(root, targetSum) {
    if (root === null) {
        return false;
    }
    targetSum -= root.val;
    if (root.left === null && root.right === null) { // root is leaf
        return targetSum === 0;
    }
    return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
};