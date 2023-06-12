function Main(products) {
  let catalogue = {};

  for (let product of products) {
    product = product.split(" : ");
    let productName = product[0];
    let productPrice = Number(product[1]);
    let group = productName[0];

    if (catalogue.hasOwnProperty(group)) {
      catalogue[group][productName] = {
        price: productPrice,
      };
    } else {
      catalogue[group] = {};
      catalogue[group][productName] = {
        price: productPrice,
      };
    }
  }

  let sortable = [];
  for (var product in catalogue) {
    sortable.push([product, catalogue[product]]);
  }

  sortable = sortable.sort(function (a, b) {
    return a[0].localeCompare(b[0]);
  });

  for (const alphaCata of sortable) {
    console.log(alphaCata[0]);
    let productsArr = [];
    for (var product in alphaCata[1]) {
      productsArr.push([product, alphaCata[1][product]]);
    }
    productsArr = productsArr.sort(function (a, b) {
      return a[0].localeCompare(b[0]);
    });
    for (const product of productsArr) {
      console.log(`  ${product[0]}: ${product[1].price}`);
    }
  }
}

Main([
  "Banana : 2",
  "Rubic's Cube : 5",
  "Raspberry P : 4999",
  "Rolex : 100000",
  "Rollon : 10",
  "Rali Car : 2000000",
  "Pesho : 0.000001",
  "Barrel : 10",
]);
