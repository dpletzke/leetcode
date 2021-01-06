/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function(numRows) {
  if (numRows === 0) return [];
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1, 1]];
  const output = [[1], [1, 1]];

  for (let i = 2; i < numRows; i++) {
    output[i] = [];
    for (let j = output[i - 1].length - 2; j >= 0; j--) {
      output[i].unshift(output[i - 1][j + 1] + output[i - 1][j]);
    }
    output[i].push(1);
    output[i].unshift(1);
  }
  return output;
};



console.log(generate(5));
