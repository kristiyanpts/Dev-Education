class Restaurant {
  constructor(budgetMoney) {
    this.budgetMoney = budgetMoney;
    this.menu = {};
    this.stockProducts = {};
    this.history = [];
  }

  loadProducts(products) {
    products.forEach((productInfo) => {
      let [productName, productQuantity, productTotalPrice] =
        productInfo.split(" ");
      productQuantity = Number(productQuantity);
      productTotalPrice = Number(productTotalPrice);

      if (this.budgetMoney >= productTotalPrice) {
        this.budgetMoney -= productTotalPrice;
        if (this.stockProducts.hasOwnProperty(productName)) {
          this.stockProducts[productName] += productQuantity;
        } else {
          this.stockProducts[productName] = productQuantity;
        }
        this.history.push(
          `Successfully loaded ${productQuantity} ${productName}`
        );
      } else {
        this.history.push(
          `There was not enough money to load ${productQuantity} ${productName}`
        );
      }
    });

    return this.history.join("\n");
  }

  addToMenu(meal, products, price) {
    if (!this.menu.hasOwnProperty(meal)) {
      products = products.map((tempProduct) => {
        return {
          name: tempProduct.split(" ")[0],
          quantity: Number(tempProduct.split(" ")[1]),
        };
      });
      this.menu[meal] = {
        products,
        price,
      };
      let length = Object.keys(this.menu).length;

      if (length === 1) {
        return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
      } else {
        return `Great idea! Now with the ${meal} we have ${length} meals in the menu, other ideas?`;
      }
    }
    return `The ${meal} is already in the our menu, try something different.`;
  }

  showTheMenu() {
    let length = Object.keys(this.menu).length;

    if (length === 0) {
      return "Our menu is not ready yet, please come later...";
    }
    let output = [];
    for (const [meal, mealInfo] of Object.entries(this.menu)) {
      output.push(`${meal} - ${mealInfo.price}`);
    }

    return output.join("\n");
  }

  makeTheOrder(meal) {
    if (!this.menu.hasOwnProperty(meal)) {
      return `There is not ${meal} yet in our menu, do you want to order something else?`;
    }
    let productsNeeded = this.menu[meal].products;
    let allProductsAvailable = true;
    productsNeeded.forEach((product) => {
      if (
        !this.stockProducts.hasOwnProperty(product.name) ||
        this.stockProducts[product.name].productQuantity < product.quantity
      ) {
        allProductsAvailable = false;
      }
    });

    if (!allProductsAvailable) {
      return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
    }

    this.budgetMoney += this.menu[meal].price;
    productsNeeded.forEach((product) => {
      this.stockProducts[product.name] -= product.quantity;
    });
    return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
  }
}

let kitchen = null;

kitchen = new Restaurant(1000);
console.log(
  kitchen.loadProducts([
    "Banana 10 5",
    "Banana 20 10",
    "Strawberries 50 30",
    "Yogurt 10 10",
    "Yogurt 500 1500",
    "Honey 5 50",
  ])
);

kitchen = new Restaurant(1000);
console.log(
  kitchen.addToMenu(
    "frozenYogurt",
    ["Yogurt 1", "Honey 1", "Banana 1", "Strawberries 10"],
    9.99
  )
);
console.log(
  kitchen.addToMenu(
    "Pizza",
    [
      "Flour 0.5",
      "Oil 0.2",
      "Yeast 0.5",
      "Salt 0.1",
      "Sugar 0.1",
      "Tomato sauce 0.5",
      "Pepperoni 1",
      "Cheese 1.5",
    ],
    15.55
  )
);

kitchen = new Restaurant(1000);
console.log(kitchen.showTheMenu());

kitchen = new Restaurant(1000);
kitchen.loadProducts([
  "Yogurt 30 3",
  "Honey 50 4",
  "Strawberries 20 10",
  "Banana 5 1",
]);
kitchen.addToMenu(
  "frozenYogurt",
  ["Yogurt 1", "Honey 1", "Banana 1", "Strawberries 10"],
  9.99
);
console.log(kitchen.makeTheOrder("frozenYogurt"));
