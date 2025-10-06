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

function mergeTwoLists(list1, list2) {
    const dummy = new ListNode();
    let cur = dummy;
    while (list1 && list2) {
        if (list1.val < list2.val) {
            cur.next = list1;
            list1 = list1.next;
        } else {
            cur.next = list2;
            list2 = list2.next;
        }
        cur = cur.next;
    }
    cur.next = list1 ? list1 : list2;
    return dummy.next;
}

var recursiveMergeKLists = function(lists) {
    function recursive(i, j) {
        const m = j - i;
        if (m === 0) {
            return null;
        }
        if (m === 1) {
            return lists[i];
        }
        const left = recursive(i, i + (m >> 1));
        const right = recursive(i + (m >> 1), j);
        return mergeTwoLists(left, right);
    }

    return recursive(0, lists.length);
};