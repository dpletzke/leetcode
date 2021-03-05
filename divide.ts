
function divide(dividend: number, divisor: number): number {
  let quotient = -1;
  let absDivid = Math.abs(dividend);
  const absDivis = Math.abs(divisor);
  while(absDivid >= 0) {
    quotient++; 
    absDivid -= absDivis;
  }
  return Math.min(2147483647, quotient * (dividend > 0 ? 1 : -1) * (divisor > 0 ? 1 : -1));
};

console.log(divide(10, 3))
