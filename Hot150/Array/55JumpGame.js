/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let range = nums[0];
    for (let i = 0; i <= range; i++) {
        if (i + nums[i] > range) {
            range = i + nums[i];
        }
        if (range >= nums.length - 1) {
            return true;
        }
    }
    return false;
};

let nums = [1,2,0,1];
console.log(canJump(nums));