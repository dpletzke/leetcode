/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {

  let maxSquare = 0;
  for (let i = 0; i < height.length; i++) {
    const leftMax = height[i];
    for (let j = height.length - 1; j > i; j--) {
      if (leftMax * (j - 1) < maxSquare) break;
      const currentArea = (j - i) * Math.min(leftMax, height[j]);
      if (currentArea > maxSquare) maxSquare = currentArea;
    }
  }

  return maxSquare;

};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49);
console.log(maxArea([1, 1]), 1);
console.log(maxArea([4, 3, 2, 1, 4]), 16);
console.log(maxArea([1, 2, 1]), 2);
