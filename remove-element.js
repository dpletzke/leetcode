/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (val === nums[i]) {
      nums.splice(i, 1);
    }
  }
  return nums.length;
};

const makeFakeArr = (n) => {
  const output = [];
  for (let i = 0; i <= n; i++) {
    output.push(Math.floor(Math.random() * 3) + 1);
  }
  return output.sort((a, b) => a - b).length;
};

console.log(Date.now());

console.log(removeElement([1, 2, 3, 3], 3));

console.log(Date.now());
