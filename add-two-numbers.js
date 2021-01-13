// Definition for singly-linked list.
const ListNode = (val, next) => {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
};

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const makeLL = (num) => {
  let list = ListNode(0);
  while (num > 0) {
    list.val = num % 10;
    num /= 10;
    list.next = ListNode(0);
    list = list.next;
  }
  return list;
};

const addTwoNumbers = (l1, l2) => {
  const digits = [];

  while (l1 || l2) {
    digits.push((l1 && l1.val) + (l2 && l2.val));
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  const num = digits.reduce((acc, n, i) => {
    acc += n * 10 ** i;
    return acc;
  }, 0);

  return makeLL(num);

};

const l1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: null,
    },
  },
};
const l2 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: null,
    },
  },
};

console.log(addTwoNumbers(l1, l2));
