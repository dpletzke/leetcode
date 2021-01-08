/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function(head) {
  
  const ledger = [];
  let node = head;
  while (node && node.next) {
    if (ledger.includes(node)) {
      return true;
    }
    ledger.push(node);
    node = node.next;
  }
  return false;

};