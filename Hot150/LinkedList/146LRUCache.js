class Node {
    constructor(key = 0, value = 0) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }

}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.dummy = new Node();

    // Circular
    this.dummy.prev = this.dummy;
    this.dummy.next = this.dummy;
    this.keyToNode = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const node = this.getNode(key);
    return node ? node.value : -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let node = this.getNode(key);
    if (node) {
        node.value = value;
        return;
    }
    node = new Node(key, value);
    this.keyToNode.set(key, node);
    this.pushFront(node);
    if (this.keyToNode.size > this.capacity) {
        const backNode = this.dummy.prev;
        this.keyToNode.delete(backNode.key);
        this.remove(backNode);
    }

};

LRUCache.prototype.getNode = function(key) {
    if (!this.keyToNode.has(key)) {
        return null;
    }
    const node = this.keyToNode.get(key);
    this.remove(node);
    this.pushFront(node);
    return node;
}

LRUCache.prototype.remove = function(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
}

LRUCache.prototype.pushFront = function (node) {
    node.prev = this.dummy;
    node.next = this.dummy.next;
    this.dummy.next.prev = node; // fix: update the old first's prev first
    this.dummy.next = node;
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */