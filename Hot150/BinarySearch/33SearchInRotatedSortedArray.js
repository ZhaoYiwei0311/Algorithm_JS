/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let peakIndex = findPeakElement(nums);
    if (target > nums[peakIndex] || (peakIndex < nums.length - 1 && target < nums[peakIndex + 1])) {
        return -1;
    }
    let secondStart = 0;
    let secondEnd = peakIndex;
    let firstStart = peakIndex < nums.length - 1 ? peakIndex + 1 : 0;
    let firstEnd = nums.length - 1;
    let left, right;
    if (target >= nums[firstStart] && target <= nums[firstEnd]) {
        left = firstStart;
        right = firstEnd;
    } else {
        left = secondStart;
        right = secondEnd;
    }
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (target === nums[mid]) {
            return mid;
        }
        if (target > nums[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
};

function findPeakElement(nums) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] < nums[0]) { // mid must be in the second part, so the peak should be to its left
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return right;
}

const nums = [4,5,6,7,0,1,2]
const target = 0;
console.log(search(nums, target));