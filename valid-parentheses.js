const replaceByRecursion = (s, reg, val) => {
  if (!reg.test(s)) return s;
  const buffer = s.replace(reg, val);
  console.log(buffer);
  return replaceByRecursion(buffer, reg, val);
};

/**
 * Returns true if all brackets have correct closing order brackets;
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
  // recursively remove matched parens,
  // if nothing to remove and more left, return false

  const parensCheck = s.match(/[(]/g)?.length === s.match(/[)]/g)?.length;
  const sqCheck = s.match(/[[]/g)?.length === s.match(/[\]]/g)?.length;
  const curCheck = s.match(/[{]/g)?.length === s.match(/[}]/g)?.length;

  if (!parensCheck || !sqCheck || !curCheck) {
    return false;
  }

  const replaced = replaceByRecursion(s, /((\(\))|(\[])|({}))/g, '');

  return replaced.length === 0;
};

const testArr = ["()", "()[]{}", "(]", "([)]", "{[]}", "()[{()[]}()]", "{{}}"];

testArr.forEach(s => {
  console.log();
  console.log(s, isValid(s));
});
