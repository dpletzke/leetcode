/** 
 Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.

  You can return the answer in any order.

 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  const comps = nums.map(n => target - n);

  const both = nums.filter(n => comps.includes(n));

  console.log({both, comps});
  return [nums.findIndex(n => n === both[0]), nums.findIndex(n => n === both[1])]
  
};

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));