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
var zigzagLevelOrder = function(root) {
    if (!root) {
        return [];
    }
    const queue = [];
    const ans = [];
    queue.push(root);
    let fromLeftToRight = true;
    while (queue.length > 0) {
        let curLength = queue.length;
        const level = []
        for (let i = 0; i < curLength; i++) {
            const node = queue.shift();
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
            level.push(node.val);
            if (i === curLength - 1) {
                if (!fromLeftToRight) {
                    level.reverse();
                }
                ans.push(level);
            }
        }
        fromLeftToRight = !fromLeftToRight;
    }
    return ans;

};