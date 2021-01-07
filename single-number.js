/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {

  const ledger = new Map();
  while (nums.length - 1 >= 0) {
    const len = nums.length - 1;

    
    if (ledger.has(nums[len])) {
      ledger.delete(nums[len]);
      nums.pop();
    } else {
      ledger.set(nums.pop(), 1);
    }
    
  }

  return Array.from(ledger.keys())[0];

};

console.log(singleNumber([1, 2, 1, 3, 2]));
