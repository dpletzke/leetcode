/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
  let num = 0;
  for (let n of nums) {
    num ^= n;
  }
  return num;
}

console.log(singleNumber([1, 2, 1, 3, 2]));
