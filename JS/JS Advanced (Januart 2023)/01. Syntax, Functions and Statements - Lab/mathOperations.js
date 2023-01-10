function Main(fNum, sNum, operator) {
  let result = 0;
  switch (operator) {
    case "+":
      result = fNum + sNum;
      break;
    case "-":
      result = fNum - sNum;
      break;
    case "*":
      result = fNum * sNum;
      break;
    case "/":
      result = fNum / sNum;
      break;
    case "%":
      result = fNum % sNum;
      break;
    case "**":
      result = fNum ** sNum;
      break;
    default:
      break;
  }

  console.log(result);
}

Main(5, 6, "+");
