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
    output[i] = [
      1,
      ... output[i - 1].reduce((acc, n, i, arr) => {
        if (arr[i + 1]) acc.push(n + arr[i + 1]);
        return acc;
      }, []),
      1,
    ];
  }
  return output;
};



console.log(generate(5));
