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
var maxPathSum = function(root) {
    let curMax = -Infinity;

    function dfs(node, sum) {
        if (node === null) {
            return 0;
        }
        let curSum = node.val + sum;
        const leftSum = dfs(node.left, sum);
        const rightSum = dfs(node.right, sum);
        const curAsNewStartSum = curSum + leftSum + rightSum; // Take both children, which means it cannot be accepted by the parent node
        const pickOneChildSum = curSum + Math.max(leftSum, rightSum); // Take one child, which means it can be accepted by the parent node and it should be returned
        curMax = Math.max(curMax, curAsNewStartSum, pickOneChildSum, curSum);

        // We can only choose pickOneChildSum or itself in the structure like below for node 4
        //          4
        //      11      1
        //    7     5
        return Math.max(curSum, pickOneChildSum);

    }
    dfs(root, 0);
    return curMax;
};