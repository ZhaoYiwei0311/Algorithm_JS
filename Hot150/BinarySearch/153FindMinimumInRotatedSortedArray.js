/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[nums.length - 1]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return nums[left];
};