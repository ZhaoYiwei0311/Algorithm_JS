/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // xor
    // [4, 1, 2, 1, 2]
    // 4 xor 1 xor 2 xor 1 xor 2
    // 4 xor (1 xor 1) xor (2 xor 2)
    // 4 xor 0 xor 0
    // 4
    let ans = 0;
    for (const x of nums) {
        ans ^= x;
    }
    return ans;
};

const nums = [4, 1, 2, 1, 2];
console.log(singleNumber(nums));