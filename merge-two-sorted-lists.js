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

  if (!l1 && l2) return l2;
  if (l1 && !l2) return l1;
  if (!l1 && !l2) return null;

  let mergeList;
  let lastElement;

  const mergeNext = (e1, e2) => {
    console.log(JSON.stringify(e1), JSON.stringify(e2));
    console.log();
    const valCheck = e1.val <= e2.val;
    if (!mergeList) {
      mergeList = valCheck ? e1 : e2;
      mergeList.next = valCheck ? e2 : e1;
      lastElement = mergeList.next;
    } else {
      lastElement.next = valCheck ? e1 : e2;
      lastElement.next.next = valCheck ? e2 : e1;
      lastElement = valCheck ? e2 : e1;
    }
    const next1 = e1.next;
    const next2 = e2.next;

    if (next1 || next2) mergeNext(next1, next2);
  };

  mergeNext(l1, l2);

  return mergeList;

};

console.log(JSON.stringify(mergeTwoLists(fakeLL(3), fakeLL(4))));

// console.log(endOfLL(test1));

// console.log(JSON.stringify(fakeLL(5)));
