/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */


const visited = new Map();

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    if (node === null) {
        return node;
    }

    if (visited.has(node)) {
        return visited.get(node);
    }
    let cloneNode = new _Node(node.val, []);
    visited.set(node, cloneNode);

    for (const neighbor of node.neighbors) {
        cloneNode.neighbors.push(cloneGraph(neighbor));
    }

    return cloneNode;
};