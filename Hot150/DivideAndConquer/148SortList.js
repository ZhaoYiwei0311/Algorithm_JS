/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function middleNode(head) {
    let pre = head, slow = head, fast = head;
    while (fast && fast.next) {
        pre = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    pre.next = null;
    return slow;
}

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
    cur.next = list1 ?? list2; // get the rest
    return dummy.next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if (head === null || head.next === null) {
        return head;
    }
    let head2 = middleNode(head);
    // divide and conquer
    head = sortList(head);
    head2 = sortList(head2);
    return mergeTwoLists(head, head2);
};