/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function(nums) {
//     let map = new Map();
//     let ans = 1;
//     map.set(nums[0], 1);
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] === nums[ans - 1]) {
//             if (map.get(nums[i]) !== 2) {
//                 nums[ans] = nums[i];
//                 ans++;
//                 map.set(nums[i], 2);
//             }
//         } else {
//             nums[ans] = nums[i];
//             map.set(nums[i], 1);
//             ans++;
//         }
//     }
//     return ans;
// };

var removeDuplicates = function(nums) {
    let stackSize = 2; // compare stack, store the first two by default
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] !== nums[stackSize - 2]) { // compare with stack top minus2
            nums[stackSize++] = nums[i]; // put into stack
        }
    }
    return Math.min(stackSize, nums.length);
};

let nums = [1,1,1,2,2,3]
console.log(removeDuplicates(nums));
console.log(nums);