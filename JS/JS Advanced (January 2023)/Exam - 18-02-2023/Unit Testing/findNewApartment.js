const findNewApartment = {
  isGoodLocation(city, nearPublicTransportation) {
    if (
      typeof city !== "string" ||
      typeof nearPublicTransportation !== "boolean"
    ) {
      throw new Error("Invalid input!");
    }
    if (city !== "Sofia" && city !== "Plovdiv" && city !== "Varna") {
      return "This location is not suitable for you.";
    } else {
      if (nearPublicTransportation == true) {
        return "You can go on home tour!";
      } else {
        return "There is no public transport in area.";
      }
    }
  },
  isLargeEnough(apartments, minimalSquareMeters) {
    let resultArr = [];
    if (
      !Array.isArray(apartments) ||
      typeof minimalSquareMeters !== "number" ||
      apartments.length == 0
    ) {
      throw new Error("Invalid input!");
    }
    apartments.map((apartment) => {
      if (apartment >= minimalSquareMeters) {
        resultArr.push(apartment);
      }
    });
    return resultArr.join(", ");
  },
  isItAffordable(price, budget) {
    if (
      typeof price !== "number" ||
      typeof budget !== "number" ||
      price <= 0 ||
      budget <= 0
    ) {
      throw new Error("Invalid input!");
    }
    let result = budget - price;
    if (result < 0) {
      return "You don't have enough money for this house!";
    } else {
      return "You can afford this home!";
    }
  },
};

let expect = require("chai").expect;

describe("Find New Apartment test ", function () {
  describe("isGoodLocation ", function () {
    it("return error if the first argument is not a string - array", function () {
      expect(() => findNewApartment.isGoodLocation(["Sofia"], true)).to.throw(
        "Invalid input!"
      );
    });
    it("return error if the first argument is not a string - object", function () {
      expect(() =>
        findNewApartment.isGoodLocation({ city: "Sofia" }, true)
      ).to.throw("Invalid input!");
    });
    it("return error if the second argument is not boolean - string", function () {
      expect(() => findNewApartment.isGoodLocation("Sofia", "true")).to.throw(
        "Invalid input!"
      );
    });
    it("return error if the second argument is not boolean - array", function () {
      expect(() => findNewApartment.isGoodLocation("Sofia", [true])).to.throw(
        "Invalid input!"
      );
    });
    it("return given string if the first argument is different than Sofia, Plovdiv or Varna", function () {
      expect(findNewApartment.isGoodLocation("Petrich", true)).to.equal(
        "This location is not suitable for you."
      );
    });
    it("return given string if the second argument is false", function () {
      expect(findNewApartment.isGoodLocation("Sofia", false)).to.equal(
        "There is no public transport in area."
      );
    });
    it("return given string if all validations are met - Sofia", function () {
      expect(findNewApartment.isGoodLocation("Sofia", true)).to.equal(
        "You can go on home tour!"
      );
    });
    it("return given string if all validations are met - Plovdiv", function () {
      expect(findNewApartment.isGoodLocation("Plovdiv", true)).to.equal(
        "You can go on home tour!"
      );
    });
  });
  describe("isLargeEnough ", function () {
    it("return error if the first argument is not an array - string", function () {
      expect(() =>
        findNewApartment.isLargeEnough("100, 200, 300", 200)
      ).to.throw("Invalid input!");
    });
    it("return error if the first argument is an empty array", function () {
      expect(() => findNewApartment.isLargeEnough([], 200)).to.throw(
        "Invalid input!"
      );
    });
    it("return error if the second argument is not a number - string", function () {
      expect(() =>
        findNewApartment.isLargeEnough([100, 200, 300], "200")
      ).to.throw("Invalid input!");
    });
    it("return 200, 300 when the minimum is 200", function () {
      expect(findNewApartment.isLargeEnough([100, 200, 300], 200)).to.equal(
        "200, 300"
      );
    });
    it("return 300 when the minimum is 300", function () {
      expect(findNewApartment.isLargeEnough([100, 200, 300], 300)).to.equal(
        "300"
      );
    });
  });
  describe("isItAffordable ", function () {
    it("return error if the first argument is not a number - string", function () {
      expect(() => findNewApartment.isItAffordable("10000", 10001)).to.throw(
        "Invalid input!"
      );
    });
    it("return error if the second argument is not a number - string", function () {
      expect(() => findNewApartment.isItAffordable(10000, "10001")).to.throw(
        "Invalid input!"
      );
    });
    it("return error if the first argument is less than or equal to 0 - equal", function () {
      expect(() => findNewApartment.isItAffordable(0, 10001)).to.throw(
        "Invalid input!"
      );
    });
    it("return error if the first argument is less than or equal to 0 - less", function () {
      expect(() => findNewApartment.isItAffordable(-1, 10001)).to.throw(
        "Invalid input!"
      );
    });
    it("return error if the second argument is less than or equal to 0 - equal", function () {
      expect(() => findNewApartment.isItAffordable(10000, 0)).to.throw(
        "Invalid input!"
      );
    });
    it("return error if the second argument is less than or equal to 0 - less", function () {
      expect(() => findNewApartment.isItAffordable(10000, -1)).to.throw(
        "Invalid input!"
      );
    });
    it("return given string if the budget is not enough", function () {
      expect(findNewApartment.isItAffordable(10000, 9999)).to.equal(
        "You don't have enough money for this house!"
      );
    });
    it("return given string if the budget is enough - 0", function () {
      expect(findNewApartment.isItAffordable(10000, 10000)).to.equal(
        "You can afford this home!"
      );
    });
    it("return given string if the budget is enough - positive", function () {
      expect(findNewApartment.isItAffordable(10000, 10001)).to.equal(
        "You can afford this home!"
      );
    });
  });
});
