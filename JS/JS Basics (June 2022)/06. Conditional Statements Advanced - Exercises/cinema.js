function Main(Input) {
  let type = Input[0];
  let rows = Number(Input[1]);
  let cols = Number(Input[2]);

  let price = 0;

  switch (type) {
    case "Premiere":
      price = 12;
      break;
    case "Normal":
      price = 7.5;
      break;
    case "Discount":
      price = 5;
      break;
    default:
      price = 0;
      break;
  }

  let output = (rows * cols) * price

  console.log(`${output.toFixed(2)} leva`);
}

Main(["Normal",

"21",

"13"])