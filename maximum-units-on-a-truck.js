/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
const maximumUnits = (boxTypes, truckSize) => {
  boxTypes.sort((a, b) => a[1] - b[1]);
  let units = 0;

  while (truckSize > 0) {
    if (!boxTypes.length) return units;
    const [boxNum, boxSize] = boxTypes.pop();
    const boxesToAdd = Math.min(truckSize, boxNum);
    units += boxesToAdd * boxSize;
    truckSize -= boxesToAdd;
  }

  return units;
};

console.log(maximumUnits([[1, 3], [2, 2], [3, 1], [3, 4]], 9));
console.log(maximumUnits([[1,3],[5,5],[2,5],[4,2],[4,1],[3,1],[2,2],[1,3],[2,5],[3,2]], 35));
