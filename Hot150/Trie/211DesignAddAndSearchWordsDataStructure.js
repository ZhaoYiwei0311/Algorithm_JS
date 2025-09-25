class Node {
    constructor() {
        this.children = new Array(26).fill(null);
        this.end = false;
    }
}

var WordDictionary = function() {
    this.root = new Node();
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let cur = this.root;
    for (let c of word) {
        c = c.charCodeAt(0) - 'a'.charCodeAt(0);
        if (cur.children[c] === null) {
            cur.children[c] = new Node();
        }
        cur = cur.children[c];
    }
    cur.end = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    let cur = this.root;
    return this.dfs(word, cur);
};

WordDictionary.prototype.dfs = function(word, node) {
    if ((word === '' && !node.end)) {
        return false;
    }

    for (let c of word) {
        if (c === '.') {
            for (let child of node.children) {
                if (child !== null) {
                    if (this.dfs(word.slice(1), child)) {
                        return true
                    }
                }
            }
            return false;
        } else {
            c = c.charCodeAt(0) - 'a'.charCodeAt(0);
            if (node.children[c] === null) {
                return false;
            }
            return this.dfs(word.slice(1), node.children[c]);
        }
    }
    return true;
};


/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

// const wordDictionary = new WordDictionary();
// console.log(wordDictionary.addWord("bad"));
// console.log(wordDictionary.addWord("dad"));
// console.log(wordDictionary.addWord("mad"));
// console.log(wordDictionary.search("pad")); // return False
// console.log(wordDictionary.search("bad")); // return True
// console.log(wordDictionary.search(".ad")); // return True
// console.log(wordDictionary.search("b..")); // return True

// const wordDictionary = new WordDictionary();
// console.log(wordDictionary.addWord("a"));
// console.log(wordDictionary.search("a..")); // return True

const wordDictionary = new WordDictionary();
console.log(wordDictionary.addWord("a"));
console.log(wordDictionary.addWord("ab"));
console.log(wordDictionary.search("a")); // return False
console.log(wordDictionary.search("a.")); // return False
console.log(wordDictionary.search("ab")); // return False
console.log(wordDictionary.search(".a")); // return False
console.log(wordDictionary.search(".d")); // return True
console.log(wordDictionary.search("ab.")); // return True
console.log(wordDictionary.search(".")); // return True
console.log(wordDictionary.search("..")); // return True
