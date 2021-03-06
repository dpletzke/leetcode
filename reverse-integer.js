const reverse = function (x) {
  let n = Math.abs(x);
  let reverseX = 0;

  while (n) {
    reverseX *= 10;
    reverseX += (n % 10);
    n = Math.floor(n / 10);
  }

  const sign = x > 0 ? 1 : -1;

  return reverseX > 2 ** 31 - 1 ? 0 : reverseX * sign;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(1534236469));
