/**
 * @param {number} n
 * @return {number}
 */

// You are given an integer n. An array nums of length n + 1 is generated in the following way:

// nums[0] = 0
// nums[1] = 1
// nums[2 * i] = nums[i] when 2 <= 2 * i <= n
// nums[2 * i + 1] = nums[i] + nums[i + 1] when 2 <= 2 * i + 1 <= n
// Return the maximum integer in the array nums​​​
const getMaximumGenerated = (n) => {
  const nums = [0, 1];
  let max = 0
  for (let i = 0; i <= n && nums.length < n + 1; i++) {
    nums[2 * i] = nums[i];
    nums[2 * i + 1] = nums[i] + nums[i + 1];
    // max = Math.max(max, nums[i] + nums[i + 1]);
  }

  return nums;

};


console.log(getMaximumGenerated(4));
