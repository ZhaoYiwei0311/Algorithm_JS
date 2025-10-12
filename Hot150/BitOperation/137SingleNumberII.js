/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let ans = 0;
    for (let i = 0; i < 32; i++) {
        let cnt1 = 0;
        for (const x of nums) {
            cnt1 += x >> i & 1;
        }
        ans |= cnt1 % 3 << i;
    }
    return ans;
};