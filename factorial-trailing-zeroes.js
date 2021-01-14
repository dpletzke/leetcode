/**
 * @param {number} n
 * @return {number}
 */

const primeFactors = (n) => {
  const factors = [];
  let divisor = 2;

  while (n >= 2) {
    if (n % divisor === 0) {
      if (divisor === 2 || divisor === 5) factors.push(divisor);
      n /= divisor;
    } else {
      divisor += 1;
    }
  }
  return factors;
};

const trailingZeroes = (n) => {
  const divisors = [];

  while (n > 1) {
    divisors.push(...primeFactors(n));
    n -= 1;
  }

  const count = divisors.reduce((acc, n) => {
    acc[n] += 1;
    return acc;
  }, { 2: 0, 5: 0 });
  return Math.min(count[2], count[5]);
};

console.log(trailingZeroes(30));
// console.log(primeFactors(16));
