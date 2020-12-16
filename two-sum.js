/** 
 Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.

  You can return the answer in any order.

 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


const twoSum = function(nums, target) {
  
  const complements = nums.map(n => target - n);

  const intersectMinusSameIndex = nums.filter((num, i) => {
    const complementsCopy = [...complements];
    complementsCopy.splice(i, 1);
    return complementsCopy.includes(num);
    // return -1 < complements.findIndex((n, j) => num === n && i !== j );
  });

  const [first, second] = intersectMinusSameIndex;
  const firstIndex = nums.findIndex(n => n === first);
  const secondIndex = nums.findIndex((n, i) => n === second && i !== firstIndex);

  return [firstIndex, secondIndex];
  
};

// console.log(twoSum([11,15,5,8], 13));
// console.log();
// console.log(twoSum([2,7,11,15], 9));
// console.log()
// console.log(twoSum([3,2,4], 6));
// console.log()
// console.log(twoSum([3,3], 6));
// console.log()
// console.log(twoSum([0, 4, 3, 0], 0));
console.log(twoSum([-3, 4, 3, 90], 0));

// const nums = 3, 2, 4
// const comps = 3, 4, 2

// const both = 3, 2, 4