/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    const ans = [];
    let left = 0;
    for (let right = 0; right < nums.length; right++) {
        if (right === nums.length - 1 || nums[right] + 1 !== nums[right + 1]) {
            if (right === left) {
                ans.push(nums[left] + "");
            } else {
                ans.push(nums[left] + "->" + nums[right]);
            }
            left = right + 1;
        }
    }
    return ans;
};

let nums = [0,2,3,4,6,8,10];
let strings = summaryRanges(nums);
console.log(strings);