
var RandomizedSet = function() {
    // changeable array and a map
    this.array = [];
    this.map = new Map();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.map.has(val)) {
        return false;
    }
    let index = this.array.length;
    this.array.push(val);
    this.map.set(val, index);
    return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    // Find to-remove index and swap with the last index of array
    if (!this.map.has(val)) {
        return false;
    }
    let index = this.map.get(val);
    this.array[index] = this.array[this.array.length - 1];
    this.map.set(this.array[index], index);
    this.array.pop();
    this.map.delete(val);
    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const randomIndex = Math.floor(Math.random() * this.array.length);
    return this.array[randomIndex];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */