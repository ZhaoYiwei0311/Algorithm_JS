/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    const n = postorder.length;
    if (n === 0) {
        return null;
    }
    const leftSize = inorder.indexOf(postorder[postorder.length - 1]);
    const in1 = inorder.slice(0, leftSize);
    const in2 = inorder.slice(leftSize + 1);
    const po1 = postorder.slice(0, leftSize);
    const po2 = postorder.slice(leftSize, postorder.length - 1);
    const left = buildTree(in1, po1);
    const right = buildTree(in2, po2);
    return new TreeNode(postorder[postorder.length - 1], left, right);
};