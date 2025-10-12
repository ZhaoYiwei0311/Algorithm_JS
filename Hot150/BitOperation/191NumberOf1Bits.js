/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let ret = 0;
    for (let i = 0; i < 32; i++) {
        if ((n & (1 << i)) !== 0) {
            ret++;
        }
    }
    return ret;
};

var betterHammingWeight = function(n) {
    let ret = 0;
    while (n) {
        // 6 (110)
        // &
        // 5 (101)
        // =
        // 4 (100)
        // &
        // 3 (011)
        // =
        // 0 (000)
        n &= n - 1;
        ret++;
    }
    return ret;
}