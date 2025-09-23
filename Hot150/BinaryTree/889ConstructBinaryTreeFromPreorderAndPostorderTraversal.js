/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function(preorder, postorder) {
    if (preorder.length === 0) {
        return null;
    }
    if (preorder.length === 1) {
        return new TreeNode(preorder[0], null, null);
    }
    const cur = preorder[0];
    const curLeft = preorder[1];
    const leftSize = postorder.indexOf(curLeft) + 1;
    const pre1 = preorder.slice(1, leftSize + 1);
    const pre2 = preorder.slice(leftSize + 1);
    const post1 = postorder.slice(0, leftSize);
    const post2 = postorder.slice(leftSize, postorder.length - 1);
    const left = constructFromPrePost(pre1, post1);
    const right = constructFromPrePost(pre2, post2);
    return new TreeNode(cur, left, right);
};