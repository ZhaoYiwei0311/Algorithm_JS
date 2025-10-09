import {MaxPriorityQueue, MinPriorityQueue} from "@datastructures-js/priority-queue";

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const heap = new MinPriorityQueue();
    for (let i = 0; i < k; i++) {
        heap.enqueue(nums[i])
    }
    for (let i = k; i < nums.length; i++) {
        let popped = heap.dequeue();
        if (nums[i] > popped) {
            heap.enqueue(nums[i]);
        } else {
            heap.enqueue(popped);
        }
    }
    return heap.dequeue();
};

// Better O()
function partition(nums, left, right) {
    // 1.Randomly pick a pivot
    const idx = left + Math.floor(Math.random() * (right - left + 1));
    const pivot = nums[idx];
    // Swap pivot and the first element
    [nums[idx], nums[left]] = [nums[left], nums[idx]];

    // 2.Two pointers
    // [ pivot | <=pivot | Not yet | >= pivot ]
    let i = left + 1, j = right;
    while (true) {
        while (i <= j && nums[i] < pivot) {
            i++;
            // No need to swap
        }

        while (i <= j && nums[j] > pivot) {
            j--
            // No need to swap
        }

        if (i >= j) {
            break;
        }

        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
        j--;
    }

    [nums[left], nums[j]] = [nums[j], nums[left]];

    return j;
}

var betterFindKthLargest = function(nums, k) {
    const n = nums.length;
    const targetIndex = n - k;
    let left = 0, right = n - 1;
    while (true) {
        const i = partition(nums, left, right);
        if (i === targetIndex) {
            return nums[i];
        }
        if (i > targetIndex) {
            // k at [left, i - 1]
            right = i - 1;
        } else {
            // k at [i + 1, right]
            left = i + 1
        }
    }
}