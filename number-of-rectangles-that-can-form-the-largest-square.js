/**
 * @param {number[][]} rectangles
 * @return {number}
 */
const countGoodRectangles = (rectangles) => {

  let count = 1;
  let maxSide = 0;
  for (let i = 0; i < rectangles.length; i++) {
    const square = Math.min(...rectangles[i]);
    if (square === maxSide) count += 1;
    if (square > maxSide) {
      count = 1;
      maxSide = square;
    }
  }
  return count;

};

console.log(countGoodRectangles([[5, 8], [3, 9], [5, 12], [16, 5]]));
console.log(countGoodRectangles([[3, 1]]));
