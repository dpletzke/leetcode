/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
  return 2 * n - 3 + ((n % 2) === 0 ? 0 : 1);
};

console.log(climbStairs(5));
