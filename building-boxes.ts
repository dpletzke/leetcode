// for each new box add to bottom if:
// the previous 'line' was full
// the 'line' is full when it is equal to height
// the height increments when the line is full
// the height returns to zero after it is equal to maxHeight
// maxheight increments when height is equal to maxHeight

// 1, 1;
// 2, 3;
// 3, 6;
// 4, 10;
// 5, 10;

const nearestLowerPerfectHeight = (maxVolume: number): number => {
  let perfect = 0;
  let n = 1;
  while (perfect < maxVolume) {
    perfect += n;
    n += 1;
  }
  return n;
};
const bottomAreaAtLevel = (level: number): number => {
  if (level === 0) return 0;
  return level + bottomAreaAtLevel(level - 1);
};
function minimumBoxes(n: number): number {
  let maxHeight = nearestLowerPerfectHeight(n);
  let bottom = bottomAreaAtLevel(maxHeight - 1);
  let line = 0;
  let height = 1;

  console.log({ maxHeight, bottom, line, height });
  for (let i = 0; i < n; i++) {
    // console.log(i + 1, { line, height, bottom, maxHeight });
    if (!line) {
      bottom += 1;
      line += 1;
    }

    if (line === height) {
      height += 1;
      if (height > maxHeight) {
        height = 1;
        maxHeight += 1;
      }
      line = 0;
    } else {
      line += 1;
    }
    // console.log(i + 1, { line, height, bottom, maxHeight });
    // console.log("");
  }
  return bottom;
}

// console.log(minimumBoxes(2));
// console.log(minimumBoxes(5));
console.log(minimumBoxes(6));
// console.log(minimumBoxes(10));
// console.log(minimumBoxes(16));
// console.log(minimumBoxes(603374129));

// for (let i = 1; i < 21; i++) {
//   console.log(i, nearestLowerPerfectHeight(i));
// }
