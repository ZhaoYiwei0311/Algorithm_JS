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
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    const n = preorder.length;
    if (n === 0) {
        return null;
    }
    const leftSize = inorder.indexOf(preorder[0]);
    const pre1 = preorder.slice(1, 1 + leftSize);
    const pre2 = preorder.slice(1 + leftSize);
    const in1 = inorder(0, leftSize);
    const in2 = inorder.slice(1 + leftSize);
    const left = buildTree(pre1, in1);
    const right = buildTree(pre2, in2);
    return new TreeNode(preorder[0], left, right);
};

var betterBuildTree = function(preorder, inorder) {
    const n = preorder.length;
    const index = new Map();
    for (let i = 0; i < n; i++) {
        index.set(inorder[i], i);
    }

    function dfs(preL, preR, inL, inR) {
        if (preL === preR) { // empty
            return null;
        }
        const leftSize = index.get(preorder[preL]) - inL;
        const left = dfs(preL + 1, preL + 1 + leftSize, inL, inL + leftSize);
        const right = dfs(preL + 1 + leftSize, preR, inL + 1 + leftSize, inR);
        return new TreeNode(preorder[preL], left, right);
    }
    return dfs(0, n, 0, n);
};