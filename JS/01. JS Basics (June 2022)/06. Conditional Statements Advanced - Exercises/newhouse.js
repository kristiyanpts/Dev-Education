function Main(Input) {
  let type = Input[0];
  let amount = Number(Input[1]);
  let budget = Number(Input[2]);

  let price = 0;

  switch (type) {
    case "Roses":
      price = amount * 5;
      if (amount > 80) {
        price = price - price * 0.1;
      }
      break;
    case "Dahlias":
      price = amount * 3.8;
      if (amount > 90) {
        price = price - price * 0.15;
      }
      break;
    case "Tulips":
      price = amount * 2.8;
      if (amount > 80) {
        price = price - price * 0.15;
      }
      break;
    case "Narcissus":
      price = amount * 3;
      if (amount < 120) {
        price = price + price * 0.15;
      }
      break;
    case "Gladiolus":
      price = amount * 2.5;
      if (amount < 80) {
        price = price + price * 0.2;
      }
      break;
  }

  if (budget >= price) {
    console.log(
      `Hey, you have a great garden with ${amount} ${type} and ${(
        budget - price
      ).toFixed(2)} leva left.`
    );
  } else {
    console.log(
      `Not enough money, you need ${(price - budget).toFixed(2)} leva more.`
    );
  }
}

Main(["Roses", "55", "250"]);
