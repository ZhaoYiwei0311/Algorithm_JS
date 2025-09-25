
var Trie = function() {
    this.root = new Node();

};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let cur = this.root;
    for (let c of word) {
        c = c.charCodeAt(0) - 'a'.charCodeAt(0);
        if (cur.son[c] === null) {
            cur.son[c] = new Node();
        }
        cur = cur.son[c];
    }
    cur.end = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.find = function(word) {
    let cur = this.root;
    for (let c of word) {
        c = c.charCodeAt(0) - 'a'.charCodeAt(0);
        if (cur.son[c] === null) {
            return 0;
        }
        cur = cur.son[c];
    }
    return cur.end ? 1 : 2;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    return this.find(word) === 1
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    return this.find(prefix) !== 0;
};

class Node {
    constructor() {
        this.son = new Array(26).fill(null);
        this.end = false;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */