/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function(n) {
    let rev = 0;
    for (let i = 0; i < 32 && n > 0; ++i) {
        // n & 1 will get the rightest val
        // rev = 0000
        // (n & 1) = 1
        // (1 << 31) = 1000...0
        // rev |= 1000...0
        rev |= (n & 1) << (31 - i);

        // n move left and remove the rightest
        n >>>= 1;
    }
    // remove negative
    return rev >>> 0;
};