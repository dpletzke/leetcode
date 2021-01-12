/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
  const ref = nums.reduce((acc, n) => {

    if (acc[n]) acc[n] += 1;
    else acc[n] = 1;

    return acc;
  }, {});
  console.log(ref);
  let max;
  for (const n in ref) {
    if (!max) max = n;
    if (ref[n] > ref[max]) {
      max = n;
    }
  }
  return max;
};

console.log(majorityElement([3, 2, 3]));
