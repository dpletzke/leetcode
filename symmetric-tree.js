/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
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

const invertTree = (root) => {
  let temp = root.left;
  root.left = root.right;
  root.right = temp;
  invertTree(root.left);
  invertTree(root.right);
};

const isSymmetric = (root) => {
  if (!root.left && !root.right) return true;
  if (
    !root.left
    || !root.right
    || root.left.val !== root.right.val) {
    return false;
  }

};
