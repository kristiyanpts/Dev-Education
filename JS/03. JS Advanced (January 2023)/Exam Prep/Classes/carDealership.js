class CarDealership {
  constructor(name) {
    this.name = name;
    this.availableCars = [];
    this.soldCars = [];
    this.totalIncome = 0;
  }

  addCar(model, horsepower, price, mileage) {
    if (
      model == "" ||
      horsepower < 0 ||
      !Number.isInteger(horsepower) ||
      price < 0 ||
      mileage < 0
    ) {
      throw new Error("Invalid input!");
    }

    this.availableCars.push({
      model,
      horsepower,
      price,
      mileage,
    });

    return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(
      2
    )} km - ${price.toFixed(2)}$`;
  }

  sellCar(model, desiredMileage) {
    let isCarForSale = this.availableCars.find((c) => c.model == model);

    if (!isCarForSale) {
      throw new Error(`${model} was not found!`);
    }

    if (isCarForSale.mileage > desiredMileage) {
      let mileageDiff = isCarForSale.mileage - desiredMileage;
      if (mileageDiff <= 40000) {
        isCarForSale.price -= isCarForSale.price * 0.05;
      } else {
        isCarForSale.price -= isCarForSale.price * 0.1;
      }
    }

    let soldPrice = isCarForSale.price;
    this.soldCars.push({
      model,
      horsepower: isCarForSale.horsepower,
      soldPrice,
    });
    this.totalIncome += soldPrice;
    this.availableCars.splice(this.availableCars.indexOf(isCarForSale), 1);
    return `${model} was sold for ${soldPrice.toFixed(2)}$`;
  }

  currentCar() {
    if (this.availableCars.length > 0) {
      let output = [];
      output.push("-Available cars:");
      this.availableCars.map((c) =>
        output.push(
          `---${c.model} - ${c.horsepower} HP - ${c.mileage.toFixed(
            2
          )} km - ${c.price.toFixed(2)}$`
        )
      );
      return output.join("\n");
    }
    return "There are no available cars";
  }

  salesReport(criteria) {
    if (criteria != "horsepower" && criteria != "model") {
      throw new Error("Invalid criteria!");
    }

    let output = [];
    output.push(
      `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`
    );
    output.push(`-${this.soldCars.length} cars sold:`);
    criteria === "horsepower"
      ? this.soldCars
          .sort((a, b) => b.horsepower - a.horsepower)
          .map((c) =>
            output.push(
              `---${c.model} - ${c.horsepower} HP - ${c.soldPrice.toFixed(2)}$`
            )
          )
      : this.soldCars
          .sort((a, b) => a.model.localeCompare(b.model))
          .map((c) =>
            output.push(
              `---${c.model} - ${c.horsepower} HP - ${c.soldPrice.toFixed(2)}$`
            )
          );

    return output.join("\n");
  }
}

// let dealership = new CarDealership("SoftAuto");
// console.log(dealership.addCar("Toyota Corolla", 100, 3500, 190000));
// console.log(dealership.addCar("Mercedes C63", 300, 29000, 187000));
// console.log(dealership.addCar("", 120, 4900, 240000));

// let dealership = new CarDealership("SoftAuto");
// dealership.addCar("Toyota Corolla", 100, 3500, 190000);
// dealership.addCar("Mercedes C63", 300, 29000, 187000);
// dealership.addCar("Audi A3", 120, 4900, 240000);
// console.log(dealership.sellCar("Toyota Corolla", 230000));
// console.log(dealership.sellCar("Mercedes C63", 110000));

// let dealership = new CarDealership("SoftAuto");
// dealership.addCar("Toyota Corolla", 100, 3500, 190000);
// dealership.addCar("Mercedes C63", 300, 29000, 187000);
// dealership.addCar("Audi A3", 120, 4900, 240000);
// console.log(dealership.currentCar());

let dealership = new CarDealership("SoftAuto");
dealership.addCar("Toyota Corolla", 100, 3500, 190000);
dealership.addCar("Mercedes C63", 300, 29000, 187000);
dealership.addCar("Audi A3", 120, 4900, 240000);
dealership.sellCar("Toyota Corolla", 230000);
dealership.sellCar("Mercedes C63", 110000);
console.log(dealership.salesReport("horsepower"));
