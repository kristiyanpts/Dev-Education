function Main(cities) {
  let cheapest = {};

  for (let productInfo of cities) {
    productInfo = productInfo.split(" | ");
    let product = productInfo[1];
    let price = Number(productInfo[2]);
    if (cheapest.hasOwnProperty(product)) {
      if (cheapest[product].price > price) {
        cheapest[product].price = price;
        cheapest[product].city = productInfo[0];
      }
    } else {
      cheapest[product] = {
        price: price,
        city: productInfo[0],
      };
    }
  }

  for (const [productName, productInfo] of Object.entries(cheapest)) {
    console.log(`${productName} -> ${productInfo.price} (${productInfo.city})`);
  }
}

Main([
  "Sample Town | Sample Product | 1000",

  "Sample Town | Orange | 2",

  "Sample Town | Peach | 1",

  "Sofia | Orange | 3",

  "Sofia | Peach | 2",

  "New York | Sample Product | 1000.1",

  "New York | Burger | 10",
]);
