/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    const m = nums1.length, n = nums2.length;
    nums1 = [-Infinity, ...nums1, Infinity];
    nums2 = [-Infinity, ...nums2, Infinity];

    let left = 0, right = m + 1;
    while (left + 1 < right) {
        const i = Math.floor((left + right) / 2);
        const j = Math.floor((m + n + 1) / 2) - i;
        if (nums1[i] <= nums2[j + 1]) {
            left = i;
        } else {
            right = i;
        }
    }

    const i = left;
    const j = Math.floor((m + n + 1) / 2) - i;
    const max1 = Math.max(nums1[i], nums2[j]);
    const min2 = Math.min(nums1[i + 1], nums2[j + 1]);
    return (m + n) % 2 ? max1 : (max1 + min2) / 2;
};

const nums1 = [2,2,4,4]
const nums2 = [2,2,2,4,4]

console.log(findMedianSortedArrays(nums1, nums2));