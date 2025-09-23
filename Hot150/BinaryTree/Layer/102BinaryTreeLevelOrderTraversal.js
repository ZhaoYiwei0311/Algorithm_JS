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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) {
        return [];
    }
    const stack = [];
    const ans = [];
    stack.push(root);
    while (stack.length > 0) {
        let curLength = stack.length;
        const level = []
        for (let i = 0; i < curLength; i++) {
            const node = stack.shift();
            level.push(node.val);
            if (node.left) {
                stack.push(node.left);
            }
            if (node.right) {
                stack.push(node.right);
            }
            if (i === curLength - 1) {
                ans.push(level);
            }
        }
    }
    return ans;
};