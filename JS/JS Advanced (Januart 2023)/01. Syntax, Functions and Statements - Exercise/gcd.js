function Main(fNum, sNum) {
  while (sNum) {
    var t = sNum;
    sNum = fNum % sNum;
    fNum = t;
  }
  console.log(fNum);
}

Main(15, 5);
Main(2154, 458);
