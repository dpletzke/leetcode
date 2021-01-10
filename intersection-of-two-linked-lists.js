/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = function(headA, headB) {
  let a = headA;
  let b = headB;
  let record = [];

  while (a || b) {
    if (a && record.includes(a)) return a;
    if (b && record.includes(b)) return b;

    record.push(a);
    record.push(b);

    if (a.next) a = a.next;
    if (b.next) b = b.next;
  }
  
};