/**
 * Definition for singly-linked list.
 function ListNode(val, next) {
 this.val = (val===undefined ? 0 : val)
 this.next = (next===undefined ? null : next)
 }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let l1Len = 0;
    let l2Len = 0;
    let l1Pointer = l1;
    let l2Pointer = l2;
    while (l1Pointer != null) {
        l1Len++;
        l1Pointer = l1Pointer.next;
    }
    while (l2Pointer != null) {
        l2Len++;
        l2Pointer = l2Pointer.next;
    }
    let l1Alt = l1;
    let l2Alt = l2;
    if (l2Len > l1Len) {
        l1Alt = l2;
        l2Alt = l1;
    }
    let dummy = new ListNode(0);
    let pointer = dummy;
    let carry = 0;
    while (l1Alt != null) {
        let l2Val = 0;
        if (l2Alt != null) {
            l2Val = l2Alt.val;
        }
        let sum = l1Alt.val + l2Val + carry;
        if (sum > 9) {
            carry = 1;
            sum = sum % 10;
        } else {
            carry = 0;
        }
        pointer.next = new ListNode(sum);
        pointer = pointer.next;
        l1Alt = l1Alt.next;
        if (l2Alt !== null) {
            l2Alt = l2Alt.next;
        }
    }
    if (carry === 1) {
        pointer.next = new ListNode(1);
    }
    return dummy.next;
};

var betterAddTwoNumbers = function(l1, l2) {
    const dummy = new ListNode();
    let cur = dummy;
    let carry = 0;
    while (l1 || l2 || carry) {
        if (l1) {
            carry += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            carry += l2.val;
            l2 = l2.next;
        }
        cur = cur.next = new ListNode(carry % 10);
        carry = Math.floor(carry / 10);
    }
    return dummy.next;
};
