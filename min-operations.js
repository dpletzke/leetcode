/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
const minOperations = (nums, x) => {

  let i = Math.floor((nums.length - 1) / 2);
  let j = i + 1;

  let inverseTarget = nums.reduce((acc, n) => acc + n, 0) - x;

  while (inverseTarget > 0) {
    console.log(i, j);

    const iBig = nums[i] > x;
    if (iBig || nums[j] > x) {
      if (iBig) {
        inverseTarget -= nums[i];
        i--;
      } else {
        inverseTarget -= nums[j];
        j++;
      }
    } else if (nums[i] > nums[j]) {
      inverseTarget -= nums[j];
      j++;
    } else {
      inverseTarget -= nums[i];
      i--;
    }
    console.log(i, j);
    console.log();
  }

  return [i, j];
};

console.log(minOperations([3, 2, 20, 5, 1, 1, 3], 10), [1, 4]);
