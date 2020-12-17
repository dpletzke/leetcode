/**
 * Returns true if all brackets have correct closing order brackets;
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
  // even number of all brackets or zero
  // order must be so that all internal brackets must be closable
  // within each match verify that each bracket side has the same number

  const parensCheck = s.match(/[(]/g).length === s.match(/[)]/g).length;
  const sqCheck = s.match(/[[]/g).length === s.match(/[\]]/g).length;
  const curCheck = s.match(/[{]/g).length === s.match(/[}]/g).length;

  if (!parensCheck || !sqCheck || !curCheck) return false;

  const regexParen = s.match(/[(].*[)]/g);
  const regexSq = s.match(/[[].*[\]]/g);
  const regexCur = s.match(/[{].*[}]/g);

  return [ , , ];
};

const testArr = ["()", "()[]{}", "(]", "([)]", "{[]}", "()[{()[]}()]", "{{}}"];

testArr.forEach(s => {
  console.log(s, isValid(s));
});
