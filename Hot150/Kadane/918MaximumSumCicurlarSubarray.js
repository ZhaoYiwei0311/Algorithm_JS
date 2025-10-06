/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    // If head to tail, we should find total - min Sum
    let total = 0
    let curMaxSum = 0;
    let curMinSum = 0;
    let maxSum = nums[0];
    let minSum = nums[0];

    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
        curMaxSum = Math.max(curMaxSum + nums[i], nums[i]);
        maxSum = Math.max(maxSum, curMaxSum);
        curMinSum = Math.min(curMinSum + nums[i], nums[i]);
        minSum = Math.min(minSum, curMinSum);
    }
    return maxSum > 0 ? Math.max(maxSum, total - minSum) : maxSum;
};