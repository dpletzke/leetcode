function rightSideView(root: TreeNode | null): number[] {
  let left = [];
  let right = [];

  if (root.left) left = [root.val, ...rightSideView(root.left)];
  if (root.right) right = [root.val, ...rightSideView(root.right)];

  if (left && left.length > right.length)
    right.push(...left.slice(right.length));

  console.log({ left, right });
  return right;
}
