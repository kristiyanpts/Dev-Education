class VegetableStore {
  constructor(owner, location) {
    this.owner = owner;
    this.location = location;
    this.availableProducts = [];
    this.totalPrice = 0;
  }

  loadingVegetables(vegetables) {
    let newProducts = [];
    vegetables.forEach((v) => {
      let [type, quantity, price] = v.split(" ");
      quantity = Number(quantity);
      price = Number(price);

      let vegetableAvailability = this.availableProducts.find(
        (v) => v.type == type
      );

      if (vegetableAvailability) {
        vegetableAvailability.quantity += quantity;
        if (price > vegetableAvailability.price) {
          vegetableAvailability.price = price;
        }
      } else {
        this.availableProducts.push({
          type,
          quantity,
          price,
        });
        newProducts.push(type);
      }
    });

    return `Successfully added ${newProducts.join(", ")}`;
  }

  buyingVegetables(selectedProducts) {
    let output = [];
    let currentTotalPrice = 0;
    this.totalPrice = 0;
    selectedProducts.forEach((p) => {
      let [type, quantity] = p.split(" ");
      quantity = Number(quantity);

      let productAvailability = this.availableProducts.find(
        (p) => p.type == type
      );

      if (!productAvailability) {
        throw new Error(
          `${type} is not available in the store, your current bill is $${currentTotalPrice.toFixed(
            2
          )}.`
        );
      }
      if (quantity > productAvailability.quantity) {
        throw new Error(
          `The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${currentTotalPrice.toFixed(
            2
          )}.`
        );
      }

      let currentPrice = quantity * productAvailability.price;
      console.log(quantity, productAvailability.price, currentPrice);
      productAvailability.quantity -= quantity;
      currentTotalPrice += currentPrice;
    });

    this.totalPrice += currentTotalPrice;
    return `Great choice! You must pay the following amount $${currentTotalPrice.toFixed(
      2
    )}.`;
  }

  rottingVegetable(type, quantity) {
    let productAvailability = this.availableProducts.find(
      (p) => p.type == type
    );

    if (!productAvailability) {
      throw new Error(`${type} is not available in the store.`);
    }
    if (quantity > productAvailability.quantity) {
      productAvailability.quantity = 0;
      return `The entire quantity of the ${type} has been removed.`;
    }
    productAvailability.quantity -= quantity;
    return `Some quantity of the ${type} has been removed.`;
  }

  revision() {
    let output = [];
    output.push("Available vegetables:");
    this.availableProducts
      .sort((a, b) => a.price - b.price)
      .map((p) => output.push(`${p.type}-${p.quantity}-$${p.price}`));
    output.push(
      `The owner of the store is ${this.owner}, and the location is ${this.location}.`
    );
    return output.join("\n");
  }
}

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(
//   vegStore.loadingVegetables([
//     "Okra 2.5 3.5",
//     "Beans 10 2.8",
//     "Celery 5.5 2.2",
//     "Celery 0.5 2.5",
//   ])
// );

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(
//   vegStore.loadingVegetables([
//     "Okra 2.5 3.5",
//     "Beans 10 2.8",
//     "Celery 5.5 2.2",
//     "Celery 0.5 2.5",
//   ])
// );
// console.log(vegStore.buyingVegetables(["Okra 1"]));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
// console.log(vegStore.buyingVegetables(["Banana 1", "Beans 2"]));

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(
//   vegStore.loadingVegetables([
//     "Okra 2.5 3.5",
//     "Beans 10 2.8",
//     "Celery 5.5 2.2",
//     "Celery 0.5 2.5",
//   ])
// );
// console.log(vegStore.rottingVegetable("Okra", 1));
// console.log(vegStore.rottingVegetable("Okra", 2.5));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(
  vegStore.loadingVegetables([
    "Okra 2.5 3.5",
    "Beans 10 2.8",
    "Celery 5.5 2.2",
    "Celery 0.5 2.5",
  ])
);
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());
