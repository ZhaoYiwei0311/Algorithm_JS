import {MinPriorityQueue} from "@datastructures-js/priority-queue";

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    const pq = new MinPriorityQueue(item=>item[0]);
    for (let i = 0; i < Math.min(nums1.length, k); i++) {
        pq.enqueue([nums1[i] + nums2[0], i, 0]);
    }

    const ans = [];
    while (k-- > 0) {
        let top = pq.dequeue();
        let i = top[1];
        let j = top[2];
        ans.push([nums1[i], nums2[j]]);
        if (j + 1 < nums2.length) {
            pq.enqueue([nums1[i] + nums2[j + 1], i, j + 1]);
        }
    }
    return ans;
};

const nums1 = [1, 7, 11];
const nums2 = [2, 4, 6];
const k = 3;
console.log(kSmallestPairs(nums1, nums2, k));