function shortestToChar(s: string, c: string): number[] {
  const output: number[] = s.split("").map((ch) => {
    if (ch === c) return 0;
    return -1;
  });

  let i = 0;
  const compare = [undefined, -1];
  while (output.includes(-1)) {
    if (output[i] === -1) {
      if (!compare.includes(output[i - 1])) output[i] = output[i - 1] + 1;
      if (!compare.includes(output[i + 1])) output[i] = output[i + 1] + 1;
    }
    i = i + 1 < output.length ? i + 1 : 0;
  }

  for (let i = output.length - 2; i >= 1; i--) {
    if (output[i] !== 0) {
      output[i] = Math.min(output[i + 1] + 1, output[i - 1] + 1);
    }
  }

  return output;
}

console.log(shortestToChar("aabaacbksglinib", "b"));
