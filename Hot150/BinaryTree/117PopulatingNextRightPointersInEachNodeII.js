/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) {
    if (root === null) {
        return root;
    }
    const queue = [];
    queue.push(root);
    while (queue.length !== 0) {
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            const cur = queue.shift();
            if (i === len - 1) {
                cur.next = null;
            } else {
                cur.next = queue[0];
            }
            if (cur.left) {
                queue.push(cur.left);
            }
            if (cur.right) {
                queue.push(cur.right);
            }
        }
    }
    return root;
};

var recursiveConnect = function(root) {
    const pre = [];
    function dfs(node, depth) {
        if (node === null) {
            return;
        }
        if (depth === pre.length) { // node is the leftest node in a new layer
            pre.push(node);
        } else {
            pre[depth].next = node;
            pre[depth] = node;
        }
        dfs(node.left, depth + 1);
        dfs(node.right, depth + 1);
    }

    dfs(root, 0);
    return root;
}