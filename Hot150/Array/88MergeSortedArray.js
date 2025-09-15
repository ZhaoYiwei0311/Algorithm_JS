/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // There will be three pointers, nums1, nums2 and the merged pointer
    // Use reverse sequence
    let pointer1 = m - 1;
    let pointer2 = n - 1;
    let pointerMerged = m + n - 1;
    while (pointer2 >= 0) {
        if (pointer1 < 0 || nums2[pointer2] > nums1[pointer1]) {
            nums1[pointerMerged] = nums2[pointer2];
            pointer2--;
            pointerMerged--;
        } else {
            nums1[pointerMerged] = nums1[pointer1];
            pointer1--;
            pointerMerged--;
        }
    }
};

let nums1 = [0];
let nums2 = [1];
merge(nums1, 0, nums2, 1);
console.log(nums1);