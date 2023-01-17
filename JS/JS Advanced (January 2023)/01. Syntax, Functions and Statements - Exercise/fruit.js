function Main(fruit, weight, price) {
  let weightInKg = weight / 1000;
  let finalPrice = weightInKg * price;
  console.log(
    `I need $${finalPrice.toFixed(2)} to buy ${weightInKg.toFixed(
      2
    )} kilograms ${fruit}.`
  );
}

Main("orange", 2500, 1.8);
Main("apple", 1563, 2.35);
