class OnlineShop {
  constructor(warehouseSpace) {
    this.warehouseSpace = warehouseSpace;
    this.products = [];
    this.sales = [];
  }

  loadingStore(product, quantity, spaceRequired) {
    if (this.warehouseSpace >= spaceRequired) {
      this.products.push({
        product,
        quantity,
      });
      this.warehouseSpace -= spaceRequired;
      return `The ${product} has been successfully delivered in the warehouse.`;
    } else {
      throw new Error("Not enough space in the warehouse.");
    }
  }

  quantityCheck(product, minimalQuantity) {
    let productAvailability = this.products.find((p) => p.product == product);

    if (!productAvailability) {
      throw new Error(`There is no ${product} in the warehouse.`);
    }
    if (minimalQuantity <= 0) {
      throw new Error("The quantity cannot be zero or negative.");
    }
    if (minimalQuantity <= productAvailability.quantity) {
      return `You have enough from product ${product}.`;
    } else {
      let difference = minimalQuantity - productAvailability.quantity;
      productAvailability.quantity = minimalQuantity;
      return `You added ${difference} more from the ${productAvailability.product} products.`;
    }
  }

  sellProduct(product) {
    let productAvailability = this.products.find((p) => p.product == product);

    if (!productAvailability) {
      throw new Error(`There is no ${product} in the warehouse.`);
    }
    productAvailability.quantity -= 1;
    let quantity = 1;
    this.sales.push({
      product,
      quantity,
    });
    return `The ${productAvailability.product} has been successfully sold.`;
  }

  revision() {
    if (this.sales.length === 0) {
      return new Error("There are no sales today!");
    } else {
      let output = [];
      output.push(`You sold ${this.sales.length} products today!`);
      output.push("Products in the warehouse:");
      this.products.map((e) =>
        output.push(`${e.product}-${e.quantity} more left`)
      );
      return output.join("\n");
    }
  }
}

const myOnlineShop = new OnlineShop(500);
console.log(myOnlineShop.loadingStore("headphones", 10, 200));
console.log(myOnlineShop.loadingStore("laptop", 5, 200));

console.log(myOnlineShop.quantityCheck("headphones", 10));
console.log(myOnlineShop.quantityCheck("laptop", 10));

console.log(myOnlineShop.sellProduct("headphones"));
console.log(myOnlineShop.sellProduct("laptop"));
console.log(myOnlineShop.revision());
