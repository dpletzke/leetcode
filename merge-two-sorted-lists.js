/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const endOfLL = (node) => {
  if (node.next) return endOfLL(node.next);
  return node;
};

const fakeLL = (n) => {
  const output = {};
  let lastL = output;
  for (let i = 0; i < n; i++) {
    lastL.val = Math.floor(Math.random() * 100) + 1;
    lastL.next = i === n - 1 ? null : {};
    lastL = lastL.next;
  }
  return output;
};

// const llToArray = (node) => {
//   const output = [node.val];
//   if (node.next) output.push(...llToArray(node.next));
//   return output;
// };

// const arrayToLL = (arr) => {
//   const output = new ListNode();
//   let lastL = output;
//   for (let i = 0; i < arr.length; i++) {
//     lastL.val = arr[i];
//     lastL.next = i === arr.length ? null : new ListNode();
//     lastL = lastL.next;
//   }
//   return output;
// };

// const mergeTwoLists = function (l1, l2) {

//   if (!l1 && l2) return l2;
//   if (l1 && !l2) return l1;
//   if (!l1 && !l2) return null;

//   const arr1 = llToArray(l1);
//   const arr2 = llToArray(l2);
//   return arrayToLL([...arr1, ...arr2].sort((a, b) => a - b));
// };

const mergeTwoLists = function (l1, l2) {
  const mergedHead = { val: -1, next: null };
  let last = mergedHead;
  while (l1 && l2) {
    if (l1.val > l2.val) {
      last.next = l2;
      l2 = l2.next;
    } else {
      last.next = l1;
      l1 = l1.next;
    }
    last = last.next;
  }
  last.next = l1 || l2;

  return mergedHead.next;
};

console.log(JSON.stringify(mergeTwoLists(fakeLL(3), fakeLL(4))));

// console.log(endOfLL(test1));

// console.log(JSON.stringify(fakeLL(5)));
