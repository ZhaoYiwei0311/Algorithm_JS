/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    nums.push(-Infinity);
    nums.unshift(-Infinity);
    let left = 1, right = nums.length - 2;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
           return mid - 1;
        } else if (nums[mid + 1] > nums[mid - 1]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left - 1;
};

var proofByContradictionFindPeakElement = function (nums) {
    // We can prove by contradiction that
    // if nums[i] < nums[i + 1], then there must be peak element in [i + 1, n - 1]
    let left = -1, right = nums.length - 1;
    while (left + 1 <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[mid + 1]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return right;
}

let nums = [2, 1];
console.log(proofByContradictionFindPeakElement(nums));