/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
  }
  return Math.max(...nums);
};

console.log(maxSubArray([1, -2, 3]));
console.log();
console.log(maxSubArray([2, -1, 2]));
console.log();
console.log(maxSubArray([-2, 4, -1]));
console.log();
console.log(maxSubArray([-2, 4, 5]));
