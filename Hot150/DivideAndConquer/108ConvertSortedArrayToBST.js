/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {

    function recursive(left, right, nums) {
        if (left === right) {
            return null;
        }
        // if (left === right) {
        //     return new TreeNode(nums[left], )
        // }
        let mid = Math.floor((left + right) / 2);
        return new TreeNode(nums[mid], recursive(left, mid, nums), recursive(mid + 1, right, nums));
    }

    return recursive(0, nums.length - 1, nums);
};

let nums = [-10,-3,0,5,9];
console.log(sortedArrayToBST(nums));