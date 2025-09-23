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
 * @return {number}
 */
var sumNumbers = function(root) {
    let allSum = 0;
    function dfs(node, sum, allSum) {
        if (node === null) {
            return 0;
        }
        if (node.left === null && node.right === null) {
            allSum += sum * 10 + node.val;
            return allSum;
        }
        let left = dfs(node, sum * 10 + node.val, allSum);
        let right = dfs(node, sum * 10 + node.val, left);
        return left + right;
    }
    return dfs(root, 0, 0);
};

var betterSumNumbers = function(root) {
    let ans = 0;
    function dfs(node, x) {
        if (node === null) {
            return;
        }
        x = x * 10 + node.val;
        if (node.left === null && node.right === null) {
            ans += x;
            return;
        }
        dfs(node.left, x);
        dfs(node.right, x);
    }
    dfs(root, 0)
    return ans;
};