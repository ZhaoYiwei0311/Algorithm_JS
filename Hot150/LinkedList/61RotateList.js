/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (!head || !head.next) {
        return head;
    }
    let length = 0;
    let cur = head;
    for (; cur; cur = cur.next) {
        length++;
        if (!cur.next) {
            cur.next = head;
            break;
        }
    }

    k = k % length;

    if (k === 0) {
        cur.next = null;
        return head;
    }
    cur = head;
    for (let i = 0; i < length - k - 1; i++) {
        cur = cur.next;
    }
    let newHead = cur.next;
    cur.next = null;
    return newHead;
};