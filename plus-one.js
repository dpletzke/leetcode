/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
  let currentIndex = digits.length - 1;
  let adding = true;
  while (adding) {
    if (digits[currentIndex] === 9) {
      digits[currentIndex] = 0;
      if (currentIndex === 0) {
        digits.unshift(1);
        adding = false;
      };
      currentIndex -= 1;
    } else {
      digits[currentIndex] += 1;
      adding = false;
    }
  }

  return digits;

};

[[1, 2, 3],
  [1, 2, 9],
  [1, 9, 9],
  [1, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  [1],
  [9],
  [0]].forEach(arr => {
  console.log(plusOne(arr));
});
