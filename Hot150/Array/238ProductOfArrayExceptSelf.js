/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // Use prefix and suffix
    const prefix = Array(nums.length);
    prefix[0] = nums[0];
    for (let i = 1; i < nums.length - 1; i++) {
        prefix[i] = nums[i] * prefix[i - 1];
    }

    const suffix = Array(nums.length);
    suffix[nums.length - 1] = nums[nums.length - 1];
    for (let i = nums.length - 2; i >= 0; i--) {
        suffix[i] = nums[i] * suffix[i + 1];
    }

    const ans = Array(nums.length);
    ans[0] = suffix[1];
    ans[nums.length - 1] = prefix[nums.length - 2];
    for (let i = 1; i < nums.length - 1; i++) {
        ans[i] = prefix[i - 1] * suffix[i + 1];
    }
    return ans;
};

let nums = [-1,1,0,-3,3]
console.log(productExceptSelf(nums));