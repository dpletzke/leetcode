const sumDigits = (n: number): number => {
  return (n % 10) + (n ? sumDigits(Math.trunc(n / 10)) : 0);
};
const countBalls = (lowLimit: number, highLimit: number): number => {
  const obj: object = {};
  for (let i = lowLimit; i <= highLimit; i++) {
    const sum = sumDigits(i);
    if (obj[sum]) obj[sum] += 1;
    else obj[sum] = 1;
  }
  return Object.values(obj).sort((a, b) => b - a)[0];
};

console.log(countBalls(1, 10));
console.log(countBalls(5, 15));
