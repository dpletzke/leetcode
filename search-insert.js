/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
  if (nums.length === 1) return nums[0] >= target ? 0 : 1;
  if (nums[0] === target) return 0;

  for (let i = 1; i < nums.length; i++) {
    if (target > nums[i - 1] && target <= nums[i]) return i;
    if (target < nums[i - 1]) return i - 1;
  }
  return nums.length;
};

console.log(searchInsert([1, 2, 4, 5], 3));
console.log(searchInsert([1, 2, 4, 5], -1));
console.log(searchInsert([1, 2, 4, 5], 6));
console.log(searchInsert([1, 2, 4, 5], 5));
console.log(searchInsert([1], 0));

console.log(searchInsert([1], 1));
