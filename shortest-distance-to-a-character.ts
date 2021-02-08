function shortestToChar(s: string, c: string): number[] {
  const output: number[] = s.split("").map((ch) => {
    if (ch === c) return 0;
    return -1;
  });

  for (let i = output.findIndex((e) => e === 0) + 1; i < output.length; i++) {
    if (output[i] === -1) {
      output[i] = output[i - 1] + 1;
    }
  }
  for (let i = output.length - 2; i >= 0; i--) {
    if (![0, -1].includes(output[i])) {
      output[i] = Math.min(output[i + 1] + 1 || 0, output[i - 1] + 1 || 0);
    }
    if (output[i] === -1) {
      output[i] = output[i + 1] + 1;
    }
  }

  return output;
}

console.log(shortestToChar("aabaacbksglinibl", "b"));
