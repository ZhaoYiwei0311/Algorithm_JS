/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function(left, right) {
    const m = 32 - Math.clz32(left ^ right); // check the prefix
    const mask = ~((1<<m) - 1);
    return left & mask;
};