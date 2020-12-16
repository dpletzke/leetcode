/**
  Given an array of integers nums and an integer target, return indices of the
  two numbers such that they add up to target.

  You may assume that each input would have exactly one solution, and you may
  not use the same element twice.

  You can return the answer in any order.

 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = function (nums, target) {
  const complements = nums.map((n) => target - n);

  const first = nums.findIndex((num, index) => {
    // found the number if its in complements and at a different index than
    const foundInComplements = complements.findIndex((n, i) => {
      console.log({
        num, n, index, i,
      });
      return n === num && index !== i;
    });

    return foundInComplements >= 0;
  });

  const second = nums.findIndex((n, i) => {
    const notSameIndex = first !== i;
    return n === target - nums[first] && notSameIndex;
  });

  return [first, second];
};

console.log(twoSum([11, 15, 5, 8], 13));
console.log();
console.log(twoSum([2, 7, 11, 15], 9));
console.log();
console.log(twoSum([3, 2, 4], 6));
console.log();
console.log(twoSum([3, 3], 6));
console.log();
console.log(twoSum([0, 4, 3, 0], 0));
console.log(twoSum([-3, 4, 3, 90], 0));
