/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {

  const ledger = new Map();
  for (let i = nums.length; i >= 0; i--) {

    if (ledger.has(nums[i])) ledger.delete(nums[i]);
    else ledger.set(nums[i], 1);

  }

  return Array.from(ledger.keys())[1];

};

console.log(singleNumber([1, 2, 1, 3, 2]));
