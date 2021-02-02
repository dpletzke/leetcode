function hammingWeight(n: number): number {
  let count = 0;
  while (n) {
    if (1 & n) count += 1;
    n = n >>> 1;
  }
  return count;
}

console.log(hammingWeight(11));
console.log(hammingWeight(16));
console.log(hammingWeight(2 ** 8));
