/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
  const firstS = strs[0];
  let letters = '';

  if(!strs.length) return '';

  for (let i = 0; i <= firstS.length; i++) {

    letters = firstS.slice(0, i);

    const checkAllStrings = strs.every(s => new RegExp(`^${letters}`).test(s));
    if (!checkAllStrings) {
      return letters.slice(0, -1);
    }
  }
  return letters;
};

const tests = [
  ['fast', 'fat', 'fact', 'fall'],
  ['fast', 'fat', 'fact', 'fib'],
  ['fast', 'fat', 'skill', 'fib'],
  ['elephant', 'elephants', 'elephantman', 'elephantphobia'],
  [],
  ["c","acc","ccc"],
];

for (const t of tests) {
  console.log(longestCommonPrefix(t));
}
