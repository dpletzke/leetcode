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
 * @return {number}
 */
const maxDepth = function(root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;
  if (root.left && !root.right) return 1 + maxDepth(root.left);
  if (root.right && !root.left) return 1 + maxDepth(root.right);

  return Math.max(1 + maxDepth(root.left), 1 + maxDepth(root.right));
};