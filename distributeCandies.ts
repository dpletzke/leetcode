/**
 *
 * @param candyType {number[]}
 * @returns {number} - maximum number of types of candies can be eaten
 */
function distributeCandies(candyType: number[]): number {
  const maxEat = candyType.length / 2;
  const availTypes = [...new Set(candyType)].length;
  return Math.min(maxEat, availTypes);
}

console.log(distributeCandies([1, 1, 2, 2, 3, 3]));
