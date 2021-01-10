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
const getIntersectionNode = function (headA, headB) {

  let a = headA;
  let b = headB;
  const record = [];

  while (a || b) {
    if (a && record.includes(a)) return a;
    if (b && record.includes(b)) return b;

    if (a) record.push(a);
    if (b) record.push(b);

    if (a) a = a.next;
    if (b) b = b.next;
  }


  return record.find((x, i) => record.lastIndexOf(x) !== i) || null;
};

//  let a = headA;
// let b = headB;
// const record = [];

// record.push(headA);
// record.push(headB);

// while (a.next || b.next) {

//   if (a.next) {
//     a = a.next;
//     if (a && record.includes(a)) return a;
//     record.push(a);
//   }
//   if (b.next) {
//     b = b.next;
//     if (b && record.includes(b)) return b;
//     record.push(b);
//   }
// }
// if (a && record.includes(a)) return a;
// if (b && record.includes(b)) return b;
// return null;
