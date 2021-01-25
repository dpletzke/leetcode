function maximumTime(time: string): string {
  // hours: first digit highest is 2, if number is 4 or less, 1 otherwise
  //        second digit highest is 9, if number is 1 or less, 4 otherwise
  // mimutes: first digit highest is 5
  //           second digit highest is 9

  let hF = time.charAt(0);
  let hS = time.charAt(1);
  let mF = time.charAt(3);
  let mS = time.charAt(4);

  if (hF === "?") {
    hF = Number(hS) <= 4 ? "2" : "1";
  }
  if (hS === "?") {
    hS = Number(hF) <= 1 ? "9" : "3";
  }

  if (mF === "?") mF = "5";
  if (mS === "?") mS = "9";

  const latestTime = `${hF}${hS}:${mF}${mS}`;
  return latestTime;
}

console.log(maximumTime("0?:?6"));
