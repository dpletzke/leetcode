/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
  const words = s.trim().split(' ').reverse();
  console.log(words);
  return words[0] ? words[0].length : 0;
};

// console.log(lengthOfLastWord('bill cheese kyle'));
console.log(lengthOfLastWord(' a'));
