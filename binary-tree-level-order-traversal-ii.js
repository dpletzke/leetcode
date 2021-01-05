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
 * @return {number[][]}
 */

const levelOrderBottom = function (root) {
  if (!root) return [];
  const output = [];
  let level = 0;
  const queue = [root];

  while (queue.length) {
    const len = queue.length;
    
    for (let i = 0; i < len; i++) {
      const node = queue.shift();

      if (!output[level]) output[level] = [];
      output[level].push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);

    }
    level += 1;
  }
  return output.reverse();
};

const ref = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
    },
    right: {
      val: 4,
    },
  },
  right: {
    val: 5,
    left: {
      val: 6,
    },
    right: {
      val: 7,
    },
  },
};

console.log(levelOrderBottom(ref));
