/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(target - nums[i], i);
    }
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i]) && map.get(nums[i] !== i)) {
            return [i, map.get(nums[i])];
        }
    }
};

var betterTwoSum = function(nums, target) {
    const idx = new Map();
    for (let j = 0; ; j++) {
        const x = nums[j];
        // find nums[i] in left to check if nums[i] + x == target
        // this can move duplicate like [3, 2, 4] and target = 6
        if (idx.has(target - x)) {
            return [idx.get(target - x), j];
        }
        idx.set(x, j);
    }
};

let nums = [3, 2, 4];
