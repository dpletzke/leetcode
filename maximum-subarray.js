/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
  const output = [];
  for (let l = 0; l <= nums.length; l++) {
    for (let i = 0; i <= nums.length; i++) {
      if (nums[i + l] !== undefined) {
        output.push(nums.slice(i, i + l + 1).reduce((acc, n) => acc + n));
      }
    }
  }
  return Math.max(...output);
};

console.log(maxSubArray([1, 2, 3, 4, 5]));
console.log(maxSubArray([0]));
