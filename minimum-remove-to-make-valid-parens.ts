function minRemoveToMakeValid(s: string): string {
  const stack: string[] = [];
  const output: string[] = [];
  s.split("").forEach((ch: string): void => {
    if (ch === ")" && !stack.length) {
      return;
    }
    if (ch === "(") {
      stack.push(")");
    }
    if (ch === ")" && stack.length) {
      stack.pop();
    }
    output.push(ch);
  });

  stack.length = 0;
  const output2 = [];

  output.reverse().forEach((ch: string): void => {
    if (ch === "(" && !stack.length) {
      return;
    }
    if (ch === ")") {
      stack.push("(");
    }
    if (ch === "(" && stack.length) {
      stack.pop();
    }
    output2.push(ch);
  });

  return output2.reverse().join("");
}

console.log(minRemoveToMakeValid("a)b(c)d"));
console.log(minRemoveToMakeValid("lee(t(c)o)de)"));
console.log(minRemoveToMakeValid("))(("));
