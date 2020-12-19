/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {

  let max = -Infinity;
  const ledger = nums.reduce(acc => {
    acc.push([]);
    return acc;
  }, []);

  for (let i = 0; i < nums.length; i++) {

    const num = nums[i];
    console.log({ max, num, ledger });

    if (max < num) {
      max = num;
    }
    if (i >= 1) {
      ledger[0] += num;
      if (ledger[0] > max) {
        max = ledger[0];
      }
    }
    ledger[0] = num;

    if (i >= 2) {
      ledger[1][0] += num;
      ledger[1][1] += num;
      if (ledger[1][0] > max) max = ledger[1][0];
      ledger.unshift();
      ledger.push(num);
    } if (i >= 1) {
      ledger[1][0] += num;
    }
    ledger[1].push(num);
  }
  return max;
};

console.log(maxSubArray([1, -2, 3]));
console.log();
console.log(maxSubArray([2, -1, 2]));
console.log();
console.log(maxSubArray([-2, 4, -1]));
console.log();
console.log(maxSubArray([-2, 4, 5]));
