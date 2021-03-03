function findErrorNums(nums: number[]): number[] {
  const output: number[] = [];

  for (let i = 1; i <= nums.length; i++) {
    const matching = nums.filter((n) => n === i);
    console.log(i, matching)
    if (matching.length === 0) output[1] = i;
    if (matching.length === 2) output[0] = i;
  }

  return output;
}

const arrs = [
  [1, 2, 2, 4],
  // [1, 8, 3, 4, 5, 6, 7, 8, 9],
  // [1, 1],
  // [3, 2, 2],
  // [1, 3, 3],
];

for (let a of arrs) {
  console.log(findErrorNums(a));
}