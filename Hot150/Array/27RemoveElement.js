/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let pointer1 = nums.length - 1;
    let pointer2 = nums.length - 1;
    let size = nums.length;
    while (pointer1 >= 0) {
        if (nums[pointer1] === val) {
            nums[pointer1] = nums[pointer2];
            pointer2--;
            size--;
        }
        pointer1--;
    }
    return size;
};

let nums = [1, 2, 3];
let count  = removeElement(nums, 2);
console.log(count)