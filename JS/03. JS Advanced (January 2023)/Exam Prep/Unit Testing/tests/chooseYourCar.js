chooseYourCar = {
  choosingType(type, color, year) {
    if (year < 1900 || year > 2022) {
      throw new Error(`Invalid Year!`);
    } else {
      if (type == "Sedan") {
        if (year >= 2010) {
          return `This ${color} ${type} meets the requirements, that you have.`;
        } else {
          return `This ${type} is too old for you, especially with that ${color} color.`;
        }
      }
      throw new Error(`This type of car is not what you are looking for.`);
    }
  },

  brandName(brands, brandIndex) {
    let result = [];

    if (
      !Array.isArray(brands) ||
      !Number.isInteger(brandIndex) ||
      brandIndex < 0 ||
      brandIndex >= brands.length
    ) {
      throw new Error("Invalid Information!");
    }
    for (let i = 0; i < brands.length; i++) {
      if (i !== brandIndex) {
        result.push(brands[i]);
      }
    }
    return result.join(", ");
  },

  carFuelConsumption(distanceInKilometers, consumptedFuelInLiters) {
    let litersPerHundredKm = (
      (consumptedFuelInLiters / distanceInKilometers) *
      100
    ).toFixed(2);

    if (
      typeof distanceInKilometers !== "number" ||
      distanceInKilometers <= 0 ||
      typeof consumptedFuelInLiters !== "number" ||
      consumptedFuelInLiters <= 0
    ) {
      throw new Error("Invalid Information!");
    } else if (litersPerHundredKm <= 7) {
      return `The car is efficient enough, it burns ${litersPerHundredKm} liters/100 km.`;
    } else {
      return `The car burns too much fuel - ${litersPerHundredKm} liters!`;
    }
  },
};

let expect = require("chai").expect;
let assert = require("chai").assert;

describe("Tests ", function () {
  describe("choosingType ", function () {
    it("returns given string when the year argument is 2010 or greater - 2010", function () {
      expect(chooseYourCar.choosingType("Sedan", "red", 2010)).to.equal(
        "This red Sedan meets the requirements, that you have."
      );
    });
    it("returns given string when the year argument is 2010 or greater - 2011", function () {
      expect(chooseYourCar.choosingType("Sedan", "red", 2011)).to.equal(
        "This red Sedan meets the requirements, that you have."
      );
    });
    it("returns given string when the year argument is 2011 or greater", function () {
      expect(chooseYourCar.choosingType("Sedan", "red", 2009)).to.equal(
        "This Sedan is too old for you, especially with that red color."
      );
    });
    it("returns error string when the year is less than 1900", function () {
      expect(
        chooseYourCar.choosingType.bind("fakeArgument", "Sedan", "red", 1800)
      ).to.throw("Invalid Year!");
    });
    it("returns error string when the year is more than 2022", function () {
      expect(
        chooseYourCar.choosingType.bind("fakeArgument", "Sedan", "red", 2023)
      ).to.throw("Invalid Year!");
    });
    it("returns error string when the type is not Sedan", function () {
      expect(chooseYourCar.choosingType.bind("Coupe", "red", 2023)).to.throw(
        "This type of car is not what you are looking for."
      );
    });
  });
  describe("brandName ", function () {
    it("returns given string when the an element at index 1 is removed", function () {
      expect(
        chooseYourCar.brandName(["BMW", "Toyota", "Peugeout"], 1)
      ).to.equal("BMW, Peugeout");
    });
    it("returns given string when the an element at index 0 is removed", function () {
      expect(
        chooseYourCar.brandName(["BMW", "Toyota", "Peugeout"], 0)
      ).to.equal("Toyota, Peugeout");
    });
    it("returns error string when the array argument is not an array", function () {
      expect(chooseYourCar.brandName.bind("BMW, Toyota, Peugeout", 1)).to.throw(
        "Invalid Information!"
      );
    });
    it("returns error string when the index argument is not a number", function () {
      expect(
        chooseYourCar.brandName.bind(["BMW", "Toyota", "Peugeout"], "1")
      ).to.throw("Invalid Information!");
    });
    it("returns error string when the index argument is outside the range - bigger than length", function () {
      expect(
        chooseYourCar.brandName.bind(["BMW", "Toyota", "Peugeout"], 4)
      ).to.throw("Invalid Information!");
    });
    it("returns error string when the index argument is outside the range - negative number", function () {
      expect(
        chooseYourCar.brandName.bind(["BMW", "Toyota", "Peugeout"], -1)
      ).to.throw("Invalid Information!");
    });
  });
  describe("carFuelConsumption ", function () {
    it("returns given string when the concuption is more than 7 liters", function () {
      console.log(chooseYourCar.carFuelConsumption(100, 50));
      expect(chooseYourCar.carFuelConsumption(100, 50)).to.equal(
        "The car burns too much fuel - 50.00 liters!"
      );
    });
    it("returns given string when the concuption is less than 7 liters - 7", function () {
      expect(chooseYourCar.carFuelConsumption(100, 7)).to.equal(
        "The car is efficient enough, it burns 7.00 liters/100 km."
      );
    });
    it("returns given string when the concuption is less than 7 liters - 6", function () {
      expect(chooseYourCar.carFuelConsumption(100, 6)).to.equal(
        "The car is efficient enough, it burns 6.00 liters/100 km."
      );
    });
    it("returns error string when the number argument is a number - first argument", function () {
      expect(chooseYourCar.carFuelConsumption.bind("100", 50)).to.throw(
        "Invalid Information!"
      );
    });
    it("returns error string when the number argument is a number - second argument", function () {
      expect(chooseYourCar.carFuelConsumption.bind(100, "50")).to.throw(
        "Invalid Information!"
      );
    });
    it("returns error string when the number argument is a negative number - first argument", function () {
      expect(chooseYourCar.carFuelConsumption.bind(-100, 50)).to.throw(
        "Invalid Information!"
      );
    });
    it("returns error string when the number argument is a negative number - second argument", function () {
      expect(chooseYourCar.carFuelConsumption.bind(100, -50)).to.throw(
        "Invalid Information!"
      );
    });
  });
});
