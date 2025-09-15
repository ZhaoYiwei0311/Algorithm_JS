/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length;
    if (k === 0) {
        return;
    }
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
};

const reverse = function (nums, start, end) {
    while (end > start) {
        swap(nums, start++, end--);
    }
}

const swap = function(nums, left, right) {
    let temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
}

let nums = [-1,-100,3,99];
let k = 2;
rotate(nums, k);
console.log(nums)