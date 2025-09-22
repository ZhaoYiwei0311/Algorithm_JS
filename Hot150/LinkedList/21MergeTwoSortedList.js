/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode();
    let pointer = dummy;
    while (list1 && list2) {
        let l1Val = list1.val;
        let l2Val = list2.val;
        if (l1Val >= l2Val) {
            pointer.next = list2;
            list2 = list2.next;
        } else {
            pointer.next = list1;
            list1 = list1.next;
        }
        pointer = pointer.next;
    }
    pointer.next = list1 ? list1 : list2;
    return dummy.next;
};

var betterMergeSortedList = function(list1, list2) {
    if (list1 === null) {
        return list2;
    }
    if (list2 === null) {
        return list1;
    }
    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    }
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
}