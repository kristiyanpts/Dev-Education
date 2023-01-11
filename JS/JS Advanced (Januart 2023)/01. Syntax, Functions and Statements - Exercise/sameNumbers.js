function Main(number) {
  let allNumbersAreSame = true;
  let sum = 0;
  number = number.toString();
  for (let i = 0; i < number.length; i++) {
    sum += Number(number[i]);
    if (number[i + 1] !== undefined && number[i] != number[i + 1]) {
      allNumbersAreSame = false;
    }
  }
  console.log(allNumbersAreSame);
  console.log(sum);
}

Main(21);
