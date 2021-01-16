/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
const decode = function(encoded, first) {
  encoded.reverse();
  encoded.push(first);

  for (let i = encoded.length - 2; i >= 0; i--) {
    encoded[i] ^= encoded[i + 1];
  }

  return encoded.reverse();

};

console.log(decode([6, 2, 7, 3], 4));
