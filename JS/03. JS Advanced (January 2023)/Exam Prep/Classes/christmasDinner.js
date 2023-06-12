class ChristmasDinner {
  constructor(budget) {
    if (budget < 0) throw new Error("The budget cannot be a negative number");
    this.budget = budget;
    this.dishes = [];
    this.products = [];
    this.guests = {};
  }

  shopping(productInfo) {
    let [productType, price] = productInfo;
    price = Number(price);

    if (this.budget >= price) {
      this.products.push(productType);
      this.budget -= price;
      return `You have successfully bought ${productType}!`;
    }
    throw new Error("Not enough money to buy this product");
  }

  recipes(recipe) {
    let haveAllProducts = true;
    recipe.productsList.forEach((product) => {
      if (!this.products.includes(product)) {
        haveAllProducts = false;
      }
    });
    if (!haveAllProducts) throw new Error("We do not have this product");
    this.dishes.push({
      recipeName: recipe.recipeName,
      productsList: recipe.productsList,
    });
    return `${recipe.recipeName} has been successfully cooked!`;
  }

  inviteGuests(name, dish) {
    let dishAvai = this.dishes.find((tempDish) => tempDish.recipeName == dish);
    if (!dishAvai) throw new Error("We do not have this dish");
    if (this.guests.hasOwnProperty(name))
      throw new Error("This guest has already been invited");

    this.guests[name] = dish;
    return `You have successfully invited ${name}!`;
  }

  showAttendance() {
    let output = [];
    for (const [guest, dish] of Object.entries(this.guests)) {
      let dishProducts = this.dishes.find(
        (tempDish) => tempDish.recipeName == dish
      );
      output.push(
        `${guest} will eat ${dish}, which consists of ${dishProducts.productsList.join(
          ", "
        )}`
      );
    }
    return output.join("\n");
  }
}

let dinner = new ChristmasDinner(300);

dinner.shopping(["Salt", 1]);
dinner.shopping(["Beans", 3]);
dinner.shopping(["Cabbage", 4]);
dinner.shopping(["Rice", 2]);
dinner.shopping(["Savory", 1]);
dinner.shopping(["Peppers", 1]);
dinner.shopping(["Fruits", 40]);
dinner.shopping(["Honey", 10]);

dinner.recipes({
  recipeName: "Oshav",
  productsList: ["Fruits", "Honey"],
});
dinner.recipes({
  recipeName: "Folded cabbage leaves filled with rice",
  productsList: ["Cabbage", "Rice", "Salt", "Savory"],
});
dinner.recipes({
  recipeName: "Peppers filled with beans",
  productsList: ["Beans", "Peppers", "Salt"],
});

dinner.inviteGuests("Ivan", "Oshav");
dinner.inviteGuests("Petar", "Folded cabbage leaves filled with rice");
dinner.inviteGuests("Georgi", "Peppers filled with beans");

console.log(dinner.showAttendance());
