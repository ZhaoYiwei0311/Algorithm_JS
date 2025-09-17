/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let sum = 0;
    let ans = nums.length + 1;
    let left = 0;
    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];
        while (sum - nums[left] >= target) {
            // Because they are all positive, so we do not need to check if left == right
            // since if left == right, the sum will become 0
            sum -= nums[left];
            left++;
        }
        if (sum >= target) {
            // in the case of there is one element
            ans = Math.min(ans, right - left + 1);
        }
    }
    return ans === nums.length + 1 ? 0 : ans;
};

let nums = [2,3,1,2,4,3];
let target = 7;
let number = minSubArrayLen(target, nums);
console.log(number);