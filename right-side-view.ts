function rightSideView(root: TreeNode | null): number[] {
  if (!root) return [];

  let left = [];
  let right = [];

  if (root && root.left) left = rightSideView(root.left);
  if (root && root.right) right = rightSideView(root.right);

  if (left && left.length > right.length)
    right.push(...left.slice(right.length));

  return [root.val, ...right];
}
