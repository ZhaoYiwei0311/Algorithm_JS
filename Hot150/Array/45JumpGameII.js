/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let ans = 0;
    if (nums.length === 0) {
        return ans;
    }
    let maxRange = 0;
    let currentRange = 0;
    for (let i = 0; i < nums.length - 1; i++) { // End loop in nums.length - 1
        // Must first build bridge
        maxRange = Math.max(i + nums[i], maxRange);
        if (i === currentRange) {
            currentRange = maxRange;
            ans++;
        }
    }
    return ans;
};

let nums = [1,2,3]
console.log(jump(nums));