/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    // just create new nodes
    let smallerDummy = new ListNode(0, head);
    let biggerDummy = new ListNode(-999, head);
    let smallerDummyPointer = smallerDummy;
    let biggerDummyPointer = biggerDummy;

    let cur = head;
    while (cur) {
        if (cur.val < x) {
            smallerDummy.next = new ListNode(cur.val);
            smallerDummy = smallerDummy.next;
        } else {
            biggerDummy.next = new ListNode(cur.val);
            biggerDummy = biggerDummy.next;
        }
        cur = cur.next;
    }
    if (biggerDummyPointer.val !== -999) {
        // there might be no bigger values
        smallerDummy.next = biggerDummyPointer.next;
    }
    return smallerDummyPointer.next;
};