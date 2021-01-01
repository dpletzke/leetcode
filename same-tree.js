/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = function (p, q) {

  if ((p && !q) || (!p && q)) {
    return false;
  }

  if (p && q && p.val !== q.val) {
    return false;
  }
  if (
    p
    && q
    && (!isSameTree(p.left, q.left) || !isSameTree(p.right, q.right))) {
    return false;
  }

  return true;
};

const fakeTree = (n) => {
  if (n === 0) return null;

  return {
    val: n,
    left: fakeTree(n - 1),
    right: fakeTree(n - 1),
  };

};

const fakeRandTree = (n) => {
  if (n === 0) return null;

  return {
    val: Math.floor(Math.random() * 10) + 1,
    right: fakeTree(n - 1),
    left: fakeTree(n - 1),
  };

};

console.log(isSameTree(fakeTree(3), fakeRandTree(3)));
