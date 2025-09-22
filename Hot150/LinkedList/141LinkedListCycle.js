/**
 * Definition for singly-linked list.

 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let dummy = new ListNode(0);
    dummy.next = head;

    let slow = dummy;
    let fast = dummy;
    while (fast != null && fast.next != null) {
        if (slow !== dummy && slow === fast) {
            return true;
        }
        slow = slow.next;
        fast = fast.next;
    }
    return false;
};

var betterHasCycle = function(head) {
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            return true;
        }
    }
    return false;
}