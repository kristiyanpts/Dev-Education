const flowerShop = {
  calcPriceOfFlowers(flower, price, quantity) {
    if (
      typeof flower != "string" ||
      !Number.isInteger(price) ||
      !Number.isInteger(quantity)
    ) {
      throw new Error("Invalid input!");
    } else {
      let result = price * quantity;

      return `You need $${result.toFixed(2)} to buy ${flower}!`;
    }
  },

  checkFlowersAvailable(flower, gardenArr) {
    if (gardenArr.indexOf(flower) >= 0) {
      return `The ${flower} are available!`;
    } else {
      return `The ${flower} are sold! You need to purchase more!`;
    }
  },

  sellFlowers(gardenArr, space) {
    let shop = [];
    let i = 0;
    if (
      !Array.isArray(gardenArr) ||
      !Number.isInteger(space) ||
      space < 0 ||
      space >= gardenArr.length
    ) {
      throw new Error("Invalid input!");
    } else {
      while (gardenArr.length > i) {
        if (i != space) {
          shop.push(gardenArr[i]);
        }
        i++;
      }
    }
    return shop.join(" / ");
  },
};

let expect = require("chai").expect;

describe("Flower Shop test ", function () {
  describe("calcPriceOfFlowers ", function () {
    it("returns error if the type of the first argument is not a string - array", function () {
      expect(() => flowerShop.calcPriceOfFlowers(["Tulip"], 10, 1)).to.throw(
        "Invalid input!"
      );
    });
    it("returns error if the type of the second argument is not an integer number - string", function () {
      expect(() => flowerShop.calcPriceOfFlowers("Tulip", "10", 1)).to.throw(
        "Invalid input!"
      );
    });
    it("returns error if the type of the second argument is not an integer number - decimal number", function () {
      expect(() => flowerShop.calcPriceOfFlowers("Tulip", 10.1, 1)).to.throw(
        "Invalid input!"
      );
    });
    it("returns error if the type of the third argument is not an integer number - string", function () {
      expect(() => flowerShop.calcPriceOfFlowers("Tulip", 10, "1")).to.throw(
        "Invalid input!"
      );
    });
    it("returns error if the type of the third argument is not an integer number - decimal number", function () {
      expect(() => flowerShop.calcPriceOfFlowers("Tulip", 10, 1.1)).to.throw(
        "Invalid input!"
      );
    });
    it("returns 10 if the price per floer is 10 and the amount is 1", function () {
      expect(flowerShop.calcPriceOfFlowers("Tulip", 10, 1)).to.equal(
        "You need $10.00 to buy Tulip!"
      );
    });
    it("returns 20 if the price per floer is 10 and the amount is 2", function () {
      expect(flowerShop.calcPriceOfFlowers("Tulip", 10, 2)).to.equal(
        "You need $20.00 to buy Tulip!"
      );
    });
  });
  describe("checkFlowersAvailable ", function () {
    it("returns given string if the flower is in the array - Tulip", function () {
      expect(
        flowerShop.checkFlowersAvailable("Tulip", ["Tulip", "Orchid", "Daisy"])
      ).to.equal("The Tulip are available!");
    });
    it("returns given string if the flower is in the array - Orchid", function () {
      expect(
        flowerShop.checkFlowersAvailable("Orchid", ["Tulip", "Orchid", "Daisy"])
      ).to.equal("The Orchid are available!");
    });
    it("returns given string if the flower is not in the array - Not Tulip", function () {
      expect(
        flowerShop.checkFlowersAvailable("Not Tulip", [
          "Tulip",
          "Orchid",
          "Daisy",
        ])
      ).to.equal("The Not Tulip are sold! You need to purchase more!");
    });
    it("returns given string if the flower is not in the array - Not Orchid", function () {
      expect(
        flowerShop.checkFlowersAvailable("Not Orchid", [
          "Tulip",
          "Orchid",
          "Daisy",
        ])
      ).to.equal("The Not Orchid are sold! You need to purchase more!");
    });
  });
  describe("sellFlowers ", function () {
    it("returns error if the type of the first argument is not an array - string", function () {
      expect(() => flowerShop.sellFlowers("Tulip, Orchid, Daisy", 0)).to.throw(
        "Invalid input!"
      );
    });
    it("returns error if the type of the second argument is not an integer number - string", function () {
      expect(() =>
        flowerShop.sellFlowers(["Tulip", "Orchid", "Daisy"], "0")
      ).to.throw("Invalid input!");
    });
    it("returns error if the type of the second argument is not an integer number - decimal number", function () {
      expect(() =>
        flowerShop.sellFlowers(["Tulip", "Orchid", "Daisy"], 0.1)
      ).to.throw("Invalid input!");
    });
    it("returns error if the second number is lower than the length of the array", function () {
      expect(() =>
        flowerShop.sellFlowers(["Tulip", "Orchid", "Daisy"], -1)
      ).to.throw("Invalid input!");
    });
    it("returns error if the second number is higher than the length of the array", function () {
      expect(() =>
        flowerShop.sellFlowers(["Tulip", "Orchid", "Daisy"], 3)
      ).to.throw("Invalid input!");
    });
    it("returns the new array when the element at index 0 is removed", function () {
      expect(flowerShop.sellFlowers(["Tulip", "Orchid", "Daisy"], 0)).to.equal(
        "Orchid / Daisy"
      );
    });
    it("returns the new array when the element at index 1 is removed", function () {
      expect(flowerShop.sellFlowers(["Tulip", "Orchid", "Daisy"], 1)).to.equal(
        "Tulip / Daisy"
      );
    });
  });
});
