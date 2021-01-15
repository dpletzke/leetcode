/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {

  let maxSquare = 0;
  let i = 0;
  let j = height.length - 1;

  while (i !== j) {
    maxSquare = Math.max(maxSquare, (j - i) * Math.min(height[i], height[j]));
    if (height[i] > height[j]) j--;
    else i++;
  }

  return maxSquare;

};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49);
console.log(maxArea([1, 1]), 1);
console.log(maxArea([4, 3, 2, 1, 4]), 16);
console.log(maxArea([1, 2, 1]), 2);
