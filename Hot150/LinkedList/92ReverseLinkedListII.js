
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    const dummy = new ListNode(0, head);
    let cur = dummy;

    let index = 0;
    let start = cur;
    let end = cur;
    while (cur && index <= right) {
        if (index === left - 1) {
            start = cur;
        }
        if (index === right) {
            end = cur.next;
            break;
        }
        cur = cur.next;
        index++;
    }

    let before = start;
    let middle = before.next;
    let after = before.next.next;
    for (let i = 0; i < right - left + 1; i++) {
        if (before === start) {
            before.next = null;
            middle.next = end;
        } else {
            middle.next = before;
        }
        if (after === end) {
            start.next = middle;
            break;
        }
        before = middle;
        middle = after;
        after = after.next;
    }
    return dummy.next;
};

var betterReverseBetween = function(head, left, right) {
    const dummy = new ListNode(0, head);
    let p0 = dummy;
    for (let i = 0; i < left - 1; i++) {
        p0 = p0.next;
    }

    let pre = null;
    let cur = p0.next;
    for (let i = 0; i < right - left + 1; i++) {
        const nxt = cur.next;
        cur.next = pre;
        pre = cur;
        cur = nxt;
    }

    p0.next.next = cur;
    p0.next = pre;
    return dummy.next;
};