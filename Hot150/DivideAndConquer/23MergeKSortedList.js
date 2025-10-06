/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

import { MinPriorityQueue } from '@datastructures-js/priority-queue';
var mergeKLists = function(lists) {
    const pq = new MinPriorityQueue(node => node.val);
    for (const head of lists) {
        if (head) {
            pq.enqueue(head);
        }
    }

    const dummy = new ListNode();
    let cur = dummy;
    while (!pq.isEmpty()) {
        const node = pq.dequeue();
        if (node.next) {
            pq.enqueue(node.next);
        }
        cur.next = node;
        cur = cur.next;
    }
    return dummy.next;
};