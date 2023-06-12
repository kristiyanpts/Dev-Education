const rentCar = {
  searchCar(shop, model) {
    let findModel = [];

    if (Array.isArray(shop) && typeof model == "string") {
      for (let i = 0; i < shop.length; i++) {
        if (model == shop[i]) {
          findModel.push(shop[i]);
        }
      }

      if (findModel.length !== 0) {
        return `There is ${findModel.length} car of model ${model} in the catalog!`;
      } else {
        throw new Error("There are no such models in the catalog!");
      }
    } else {
      throw new Error("Invalid input!");
    }
  },

  calculatePriceOfCar(model, days) {
    let catalogue = {
      Volkswagen: 20,

      Audi: 36,

      Toyota: 40,

      BMW: 45,

      Mercedes: 50,
    };

    if (typeof model == "string" && Number.isInteger(days)) {
      if (catalogue.hasOwnProperty(model)) {
        let cost = catalogue[model] * days;

        return `You choose ${model} and it will cost $${cost}!`;
      } else {
        throw new Error("No such model in the catalog!");
      }
    } else {
      throw new Error("Invalid input!");
    }
  },

  checkBudget(costPerDay, days, budget) {
    if (
      !Number.isInteger(costPerDay) ||
      !Number.isInteger(days) ||
      !Number.isInteger(budget)
    ) {
      throw new Error("Invalid input!");
    } else {
      let cost = costPerDay * days;
      if (cost <= budget) {
        return `You rent a car!`;
      } else {
        return "You need a bigger budget!";
      }
    }
  },
};

let expect = require("chai").expect;

describe("Rent Car test ", function () {
  describe("searchCar ", function () {
    it("returns error when the first argument is not an array - string", function () {
      expect(() => rentCar.searchCar("Volkswagen, BMW, Audi", "BMW")).to.throw(
        "Invalid input!"
      );
    });
    it("returns error when the second argument is not a string - array", function () {
      expect(() =>
        rentCar.searchCar(["Volkswagen", "BMW", "Audi"], ["BMW"])
      ).to.throw("Invalid input!");
    });
    it("returns error when the model is not present in the array - first test", function () {
      expect(() =>
        rentCar.searchCar(["Volkswagen", "BMW", "Audi"], "Not BMW")
      ).to.throw("There are no such models in the catalog!");
    });
    it("returns error when the model is not present in the array - second test", function () {
      expect(() =>
        rentCar.searchCar(["Volkswagen", "BMW", "Audi"], "Not Audi")
      ).to.throw("There are no such models in the catalog!");
    });
    it("returns given string when the model matches only one item in the array", function () {
      expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], "Audi")).to.equal(
        "There is 1 car of model Audi in the catalog!"
      );
    });
    it("returns given string when the model matches two items in the array", function () {
      expect(
        rentCar.searchCar(["Volkswagen", "BMW", "Audi", "Audi"], "Audi")
      ).to.equal("There is 2 car of model Audi in the catalog!");
    });
  });
  describe("calculatePriceOfCar ", function () {
    it("returns error when the first argument is not a string - array", function () {
      expect(() => rentCar.calculatePriceOfCar(["Audi"], 1)).to.throw(
        "Invalid input!"
      );
    });
    it("returns error when the second argument is not an integer number - string", function () {
      expect(() => rentCar.calculatePriceOfCar("Audi", "1")).to.throw(
        "Invalid input!"
      );
    });
    it("returns error when the second argument is not an integer number - decimal number", function () {
      expect(() => rentCar.calculatePriceOfCar("Audi", 1.1)).to.throw(
        "Invalid input!"
      );
    });
    it("returns error when the model is not found", function () {
      expect(() => rentCar.calculatePriceOfCar("Not Audi", 1)).to.throw(
        "No such model in the catalog!"
      );
    });
    it("returns 36 when the model is Audi rented for 1 day", function () {
      expect(rentCar.calculatePriceOfCar("Audi", 1)).to.equal(
        "You choose Audi and it will cost $36!"
      );
    });
    it("returns 72 when the model is Audi rented for 2 days", function () {
      expect(rentCar.calculatePriceOfCar("Audi", 2)).to.equal(
        "You choose Audi and it will cost $72!"
      );
    });
  });
  describe("checkBudget ", function () {
    it("returns error when the first argument is not an integer number", function () {
      expect(() => rentCar.checkBudget(30.5, 1, 30)).to.throw("Invalid input!");
    });
    it("returns error when the second argument is not an integer number", function () {
      expect(() => rentCar.checkBudget(30, 1.1, 30)).to.throw("Invalid input!");
    });
    it("returns error when the third argument is not an integer number", function () {
      expect(() => rentCar.checkBudget(30, 1, 30.5)).to.throw("Invalid input!");
    });
    it("returns given string when the input is correct", function () {
      expect(rentCar.checkBudget(30, 1, 30)).to.equal("You rent a car!");
    });
    it("returns given string when the input is incorrect", function () {
      expect(rentCar.checkBudget(30, 1, 29)).to.equal(
        "You need a bigger budget!"
      );
    });
  });
});
