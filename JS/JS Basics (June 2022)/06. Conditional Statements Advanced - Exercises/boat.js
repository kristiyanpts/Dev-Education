function Main(Input) {
  let budget = Number(Input[0]);
  let season = Input[1];
  let amount = Number(Input[2]);

  let price = 0;

  switch (season) {
    case "Spring":
      price = 3000;
      if (amount <= 6) {
        price = price - (price * 0.1);
      } else if (amount > 6 && amount <= 11) {
        price = price - (price * 0.15);
      } else if (amount > 11) {
        price = price - (price * 0.25);
      }

      if (amount % 2 === 0) {
        price = price - (price * 0.05);
      }
      break;
    case "Summer":
      price = 4200;
      if (amount <= 6) {
        price = price - (price * 0.1);
      } else if (amount > 6 && amount <= 11) {
        price = price - (price * 0.15);
      } else if (amount > 11) {
        price = price - (price * 0.25);
      }

      if (amount % 2 === 0) {
        price = price - (price * 0.05);
      }
      break;
    case "Autumn":
      price = 4200;
      if (amount <= 6) {
        price = price - (price * 0.1);
      } else if (amount > 6 && amount <= 11) {
        price = price - (price * 0.15);
      } else if (amount > 11) {
        price = price - (price * 0.25);
      }
      break;
    case "Winter":
      price = 2600;
      if (amount <= 6) {
        price = price - (price * 0.1);
      } else if (amount > 6 && amount <= 11) {
        price = price - (price * 0.15);
      } else if (amount > 11) {
        price = price - (price * 0.25);
      }

      if (amount % 2 === 0) {
        price = price - (price * 0.05);
      }
      break;
    default:
      break;
  }

  if (budget >= price) {
    console.log(`Yes! You have ${(budget - price).toFixed(2)} leva left.`);
  } else {
    console.log(`Not enough money! You need ${(price - budget).toFixed(2)} leva.`);
  }
}

Main(["3000", "Summer", "11"]);
