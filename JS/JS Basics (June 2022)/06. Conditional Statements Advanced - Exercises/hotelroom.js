function Main(Input) {
  let month = Input[0];
  let amount = Number(Input[1]);

  let priceForStudio = 0;
  let priceForApartment = 0;
  let discount = 0;

  switch (month) {
    case "May":
    case "October":
        if (amount > 7 && amount <= 14)
        {
            priceForStudio = amount * (50 - (50 * 0.05))
            priceForApartment = amount * 65
        }
        else if (amount > 14)
        {
            priceForStudio = amount * (50 - (50 * 0.3))
            priceForApartment = amount * (65 - (65 * 0.1))
        }
        else
        {
            priceForStudio = amount * 50
            priceForApartment = amount * 65
        }
      break;
    case "June":
    case "September": 
        if (amount > 14)
        {
            priceForStudio = amount * (75.2 - (75.2 * 0.2))
            priceForApartment = amount * (68.7 - (68.7 * 0.1))
        }
        else
        {
            priceForStudio = amount * 75.2
            priceForApartment = amount * 68.7
        }
      break;
    case "July":
    case "August":
        if (amount > 14)
        {
            priceForStudio = amount * 76
            priceForApartment = amount * (77 - (77 * 0.1))
        }
        else
        {
            priceForStudio = amount * 76
            priceForApartment = amount * 77
        }
      break;
    default:
      break;
  }

  console.log(`Apartment: ${priceForApartment.toFixed(2)} lv.`);
  console.log(`Studio: ${priceForStudio.toFixed(2)} lv.`);
}

Main(["May",

"15"])