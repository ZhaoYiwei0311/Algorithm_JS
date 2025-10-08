/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {

    function lowerBound(nums, target) {
        let left = 0, right = nums.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] >= target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }

    let start = lowerBound(nums, target);
    if (start === nums.length || nums[start] !== target) {
        return [-1, -1];
    }
    let end = lowerBound(nums, target + 1) - 1;
    return [start, end];
};

const nums = [5,7,7,8,8,10]
const target = 6;
console.log(searchRange(nums, target));