/**
 * Handles negatives with as-written behavior meaning all neagtives
 * aren't palindromes due to sign character
 *
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  if (x === 0) return true;
  if (x < 0 || x % 10 === 0) return false;
  let workingX = x; // 10
  let reverse = 0; // 0

  while (x > reverse) {
    reverse = reverse * 10 + (workingX % 10); // 0
    workingX = Math.floor(workingX / 10);
  }
  return reverse === x;
};

console.log(isPalindrome(10));
console.log(isPalindrome(12121));
console.log(isPalindrome(12111));
console.log(isPalindrome(-12121));
