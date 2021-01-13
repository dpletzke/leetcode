/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = s => {
  const ref = {};
  let currentString = 0;

  return s.split('').reduce((max, ch, i) => {
    currentString = ref[ch] >= currentString ? ref[ch] + 1 : currentString;
    ref[ch] = i;

    return Math.max(max, i - currentString + 1);
  }, 0);
};

// console.log(lengthOfLongestSubstring('aabbccccde'));
// console.log(lengthOfLongestSubstring('au'));
// console.log(lengthOfLongestSubstring('dvdf'));
console.log(lengthOfLongestSubstring('anviaj'));
