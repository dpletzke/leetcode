/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = function (n) {
  let str = '1';
  for (let i = 0; i < n - 1; i++) {
    let newString = '';
    let count = 0;

    for (let j = str.length - 1; j >= 0; j--) {
      count += 1;
      const thisChar = str.charAt(j);
      if (thisChar !== str.charAt(j - 1)) {
        newString = `${count}${thisChar}${newString}`;
        count = 0;
      }
    }
    str = newString;
  }

  return str;

};

console.log(countAndSay(7));
