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
var getMinimumDifference = function(root) {
    let ans = Infinity;
    let pre = -Infinity;

    function dfs(curNode) {
        if (!curNode) {
            return;
        }
        dfs(curNode.left);
        ans = Math.min(Math.abs(pre - curNode.val), ans);
        pre = curNode.val;
        dfs(curNode.right);
    }

    dfs(root);
    return ans;

};