function brokenCalc(X: number, Y: number): any {
  if (X > Y) return X - Y;

  const fromX = [];
  for (let i = X; i < Y * 2; i *= 2) {
    // console.log(i);
    fromX.push(i);
  }
  const fromY = [];
  for (let i = Y; i > X / 2; i /= 2) {
    // console.log(i);
    if (i % 1 === 0) fromY.push(i);
  }

  // \I'm trying to have an array of
  const nearestLess = fromX.map((x, xI) => {
    const yI = fromY.findIndex((y) => y < x);
    return x - fromY.find((y) => y < x) + yI + xI || Infinity;
  });

  console.log({ fromX, fromY });
  return Math.min(...nearestLess);
}

console.log(brokenCalc(3, 10));
console.log(brokenCalc(10, 1));
console.log(brokenCalc(3, 100));
