const totalMoney = (n) => {
  let monday = 1;
  let sum = 0;
  while (n > 0) {
    for (let i = 0; i < 7; i++) {
      sum += monday + i;
      n--;
      if (n <= 0) return sum;
    }
    monday += 1;
  }
  return sum;
  
};
