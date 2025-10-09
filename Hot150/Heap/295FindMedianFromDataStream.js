import {MaxPriorityQueue, MinPriorityQueue} from "@datastructures-js/priority-queue";

var MedianFinder = function() {
    this.left = new MaxPriorityQueue();
    this.right = new MinPriorityQueue();
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    // we want to make two queues evenly distributed. If odd, left size === right size + 1
    // 1.left size === right size
    //  1.1.num is big, put to right
    //      Then this is not correct, so move one from right to left
    //  1.2.num is small, put to left
    // 2.left size === right size + 1
    //  2.1.num is small, put to left
    //      Then this is not correct, so move one from left to right
    //  2.2.num is big, put to right

    if (this.left.size() === this.right.size()) {
        this.right.enqueue(num);
        this.left.enqueue(this.right.dequeue());
    } else {
        this.left.enqueue(num);
        this.right.enqueue(this.left.dequeue());
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.left.size() > this.right.size()) {
        return this.left.front();
    }
    return (this.left.front() + this.right.front()) / 2;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */