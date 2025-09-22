/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    const dummy = new ListNode(-101, head);

    let left = dummy;
    while (left.next && left.next.next) {
        let val = left.next.val;
        if (val === left.next.next.val) {
            while (left.next && left.next.val === val) {
                // delete
                left.next = left.next.next;
            }
        } else {
            left = left.next;
        }
    }
    return dummy.next;
};