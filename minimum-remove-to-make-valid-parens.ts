function minRemoveToMakeValid(s: string): string {
  const stack: string[] = [];
  const output: string[] = s.split("");

  output.forEach((ch: string, i: number): void => {
    if (ch === ")" && !stack.length) {
      output[i] = "";
      return;
    }
    if (ch === "(") {
      stack.push(")");
    }
    if (ch === ")" && stack.length) {
      stack.pop();
    }
    output[i] = ch;
  });
  stack.length = 0;

  output.reverse().forEach((ch: string, i: number): void => {
    if (ch === "(" && !stack.length) {
      output[i] = "";
      return;
    }
    if (ch === ")") {
      stack.push("(");
    }
    if (ch === "(" && stack.length) {
      stack.pop();
    }
    output[i] = ch;
  });

  return output.reverse().join("");
}

console.log(minRemoveToMakeValid("a)b(c)d"));
console.log(minRemoveToMakeValid("lee(t(c)o)de)"));
console.log(minRemoveToMakeValid("))(("));
