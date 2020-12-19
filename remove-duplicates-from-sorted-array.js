/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i + 1] === nums[i]) {
      nums.splice(i, 1);
      i += 1;
    }
  }
  return nums;
};

const makeFakeArr = (n) => {
  const output = [];
  for (let i = 0; i <= n; i++) {
    output.push(Math.floor(Math.random() * 3) + 1);
  }
  return output.sort((a, b) => a - b).length;
};

console.log(Date.now());
console.log(removeDuplicates([1, 2, 3, 3, 3, 4]));
console.log(removeDuplicates([1, 2, 3, 3, 3, 4]));
console.log(removeDuplicates(makeFakeArr(5)));
console.log(removeDuplicates(makeFakeArr(5)));
console.log(removeDuplicates(makeFakeArr(5)));
console.log(removeDuplicates(makeFakeArr(5)));
console.log(removeDuplicates(makeFakeArr(5)));
console.log(Date.now());
