function solution() {
  let stock = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };
  let recepies = {
    apple: { carbohydrate: 1, flavour: 2 },
    lemonade: { carbohydrate: 10, flavour: 20 },
    burger: { carbohydrate: 5, fat: 7, flavour: 3 },
    eggs: { protein: 5, fat: 1, flavour: 1 },
    turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
  };

  function RestockElement(element, quantity) {
    stock[element] += quantity;
    return "Success";
  }

  function PrepareRecipe(recipe, quantity) {
    let required = recepies[recipe];
    const parsedRecipe = Object.entries(required).map((x) => [
      x[0],
      x[1] * quantity,
    ]);
    for (let i = 0; i < parsedRecipe.length; i++) {
      const [name, amount] = parsedRecipe[i];
      if (stock[name] - amount < 0) {
        return `Error: not enough ${name} in stock`;
      }
    }
    parsedRecipe.forEach(([name, amount]) => (stock[name] -= amount));
    return "Success";
  }

  function Report() {
    return Object.entries(stock)
      .map(([product, productAmount]) => `${product}=${productAmount}`)
      .join(" ");
  }

  return (info) => {
    let [command, fElement, quantity] = info.split(" ");
    switch (command) {
      case "restock":
        return RestockElement(fElement, Number(quantity));
      case "prepare":
        return PrepareRecipe(fElement, Number(quantity));
      case "report":
        return Report();
      default:
        break;
    }
  };
}

let manager = solution();

console.log(manager("restock flavour 50"));
console.log(manager("prepare lemonade 4"));
// console.log(manager("prepare turkey 1"));
// console.log(manager("restock carbohydrate 10"));
// console.log(manager("prepare turkey 1"));
// console.log(manager("restock fat 10"));
// console.log(manager("prepare turkey 1"));
// console.log(manager("restock flavour 10"));
// console.log(manager("prepare turkey 1"));
// console.log(manager("report"));
