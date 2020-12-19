/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function(haystack, needle) {
  if (!needle) return 0;
  if (!haystack.includes(needle)) return -1;
  return haystack.split(needle)[0].length;
};