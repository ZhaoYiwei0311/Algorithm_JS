/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let stackSize = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[stackSize] !== nums[i]) {
            nums[stackSize + 1] = nums[i];
            stackSize++;
        }
    }
    return stackSize + 1;
};

let nums = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums));