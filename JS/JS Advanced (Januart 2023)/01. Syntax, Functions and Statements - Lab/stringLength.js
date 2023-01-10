function Main(fString, sString, tString) {
  let sum, avg;
  sum = fString.length + sString.length + tString.length;
  avg = sum / 3;
  console.log(Math.trunc(sum));
  console.log(Math.trunc(avg));
}

Main("pasta", "5", "22.3");
