function Main(x1, y1, x2, y2) {
  let fTest1 = 0 - x1;
  let fTest2 = 0 - y1;
  fTest1 = fTest1 * fTest1;
  fTest2 = fTest2 * fTest2;
  let sTest1 = 0 - x2;
  let sTest2 = 0 - y2;
  sTest1 = sTest1 * sTest1;
  sTest2 = sTest2 * sTest2;
  let tTest1 = x2 - x1;
  let tTest2 = y2 - y1;
  tTest1 = tTest1 * tTest1;
  tTest2 = tTest2 * tTest2;
  let fResult = Math.sqrt(fTest1 + fTest2);
  let sResult = Math.sqrt(sTest1 + sTest2);
  let tResult = Math.sqrt(tTest1 + tTest2);
  fResult % 1 != 0
    ? console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    : console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
  sResult % 1 != 0
    ? console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
    : console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
  tResult % 1 != 0
    ? console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    : console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
}

Main(3, 0, 0, 4);
