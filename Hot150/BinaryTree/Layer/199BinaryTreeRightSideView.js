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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) {
        return [];
    }
    const stack = [];
    const ans = [];
    stack.push(root);
    while (stack.length > 0) {
        let curLength = stack.length;
        for (let i = 0; i < curLength; i++) {
            const node = stack.shift();
            if (node.left) {
                stack.push(node.left);
            }
            if (node.right) {
                stack.push(node.right);
            }
            if (i === curLength - 1) {
                ans.push(node.val);
            }
        }
    }
    return ans;
};

var betterRightSideView = function(root) {
    const ans = []

    function dfs(node, depth) {
        if (!node) {
            return;
        }
        if (depth === ans.length) {
            // Use ans length to check the maximum depth we reached
            ans.push(node.val);
        }
        dfs(node.right, depth + 1);
        dfs(node.left, depth + 1);
    }

    dfs(root, 0);
    return ans;
}