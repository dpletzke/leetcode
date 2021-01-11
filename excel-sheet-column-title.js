/**
 * @param {number} n
 * @return {string}
 */

//
const convertToTitle = (n) => {
  const chars = [];
  let num = n;
  while (num > 0) {
    let remainder = num % 26;
    let next = Math.floor(num / 26);

    if (remainder === 0) {
      remainder = 26;
      next -= 1;
    }

    chars.push(remainder);
    num = next;

  }

  return chars.map(n => String.fromCharCode(n + 64)).reverse().join('');
};

console.log(convertToTitle(2), 'B');
console.log(convertToTitle(28), 'AB');
console.log(convertToTitle(52), 'AZ');
console.log(convertToTitle(323), 'LK');
console.log(convertToTitle(701), 'ZY');
console.log(convertToTitle(900), 'AHP');
