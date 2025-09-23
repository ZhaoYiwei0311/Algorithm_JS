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
var countNodes = function(root) {
    // O(logn * logn)
    let leftNode = root;
    let rightNode = root;
    let leftHeight = 0;
    let rightHeight = 0;
    while (leftNode !== null) {
        leftNode = leftNode.left;
        leftHeight++;
    }
    while (rightNode !== null) {
        rightNode = rightNode.right;
        rightHeight++;
    }
    if (leftHeight === rightHeight) {
        // perfect tree
        return Math.pow(2, rightHeight) - 1;
    }
    return 1 + countNodes(root.left) + countNodes(root.right);
};