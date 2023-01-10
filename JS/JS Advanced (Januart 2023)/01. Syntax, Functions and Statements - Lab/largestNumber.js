function Main(fNum, sNum, tNum) {
  let largestNum = 0;
  if (fNum > sNum && fNum > tNum) {
    largestNum = fNum;
  } else if (sNum > fNum && sNum > tNum) {
    largestNum = sNum;
  } else if (tNum > fNum && tNum > sNum) {
    largestNum = tNum;
  }
  console.log(`The largest number is ${largestNum}.`);
}

Main(-3, -5, -22.5);
