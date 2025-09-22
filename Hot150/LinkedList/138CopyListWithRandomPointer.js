/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    if (head === null) {
        return null;
    }
    
    let pointer = head;
    while (pointer) {
        pointer.next = new _Node(pointer.val, pointer.next, pointer.random);
        pointer = pointer.next.next;
    }

    pointer = head;
    while (pointer) {
        if (pointer.random) {
            pointer.next.random = pointer.random.next;
        }
        pointer = pointer.next.next;
    }

    const newHead = head.next;
    let cur = head;
    while (cur.next.next) {
        const copy = cur.next;
        cur.next = copy.next;
        copy.next = copy.next.next;
        cur = cur.next;
    }
    cur.next = null;

    return newHead;
};