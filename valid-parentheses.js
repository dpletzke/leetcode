/**
 * @param {string} s
 * @return {boolean}
 */

const ref = {
  '[': ']',
  '{': '}',
  '(': ')',
};
const isValid = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (ref[c]) {
      stack.push(ref[c]);
    } else if (c !== stack.pop()) {
      return false;
    }
  }

  return !stack.length;
};

const testArr = ['()', '()[]{}', '(]', '([)]', '{[]}', '()[{()[]}()]', '{{}}'];

testArr.forEach(s => {
  console.log();
  console.log(s, isValid(s));
});
