function divide(dividend: number, divisor: number): number {
  if (dividend === -2147483648 && divisor === -1) return 2147483647;
  if (dividend === -2147483648 && divisor === 1) return -2147483648;
  let quotient = -1;
  let absDivid = Math.abs(dividend);
  const absDivis = Math.abs(divisor);
  while (absDivid >= 0) {
    quotient++;
    absDivid -= absDivis;
  }

  return (
    (2147483647 > quotient ? quotient : 2147483647) *
    (dividend > 0 ? 1 : -1) *
    (divisor > 0 ? 1 : -1)
  );
}

console.log(divide(10, 3));
