/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = function (n) {
  let str = '1';
  for (let i = 0; i < n - 1; i++) {
    const arr = str.split('');
    str = '';
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
      count += 1;
      if (arr[j] !== arr[j + 1]) {
        str += `${count}${arr[j]}`;
        count = 0;
      }
    }
  }

  return str;

};

console.log(countAndSay(7));
