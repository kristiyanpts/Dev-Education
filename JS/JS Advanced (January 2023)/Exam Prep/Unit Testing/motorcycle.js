const motorcycleRider = {
  licenseRestriction(category) {
    if (category === "AM") {
      return "Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.";
    } else if (category === "A1") {
      return "Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.";
    } else if (category === "A2") {
      return "Motorcycles with maximum power of 35KW. and the minimum age is 18.";
    } else if (category === "A") {
      return "No motorcycle restrictions, and the minimum age is 24.";
    } else {
      throw new Error("Invalid Information!");
    }
  },
  motorcycleShowroom(engineVolume, maximumEngineVolume) {
    if (
      !Array.isArray(engineVolume) ||
      typeof maximumEngineVolume !== "number" ||
      engineVolume.length < 1 ||
      maximumEngineVolume < 50
    ) {
      throw new Error("Invalid Information!");
    }
    let availableBikes = [];
    engineVolume.forEach((engine) => {
      if (engine <= maximumEngineVolume && engine >= 50) {
        availableBikes.push(engine);
      }
    });
    return `There are ${availableBikes.length} available motorcycles matching your criteria!`;
  },
  otherSpendings(equipment, consumables, discount) {
    if (
      !Array.isArray(equipment) ||
      !Array.isArray(consumables) ||
      typeof discount !== "boolean"
    ) {
      throw new Error("Invalid Information!");
    }
    let totalPrice = 0;

    equipment.forEach((element) => {
      if (element === "helmet") {
        totalPrice += 200;
      } else if (element === "jacked") {
        totalPrice += 300;
      }
    });

    consumables.forEach((element) => {
      if (element === "engine oil") {
        totalPrice += 70;
      } else if (element === "oil filter") {
        totalPrice += 30;
      }
    });
    if (discount) {
      totalPrice = totalPrice * 0.9;
      return `You spend $${totalPrice.toFixed(
        2
      )} for equipment and consumables with 10% discount!`;
    } else {
      return `You spend $${totalPrice.toFixed(
        2
      )} for equipment and consumables!`;
    }
  },
};

let expect = require("chai").expect;

describe("Tests ", function () {
  describe("licenseRestriction ", function () {
    it("returns given string when the argument given is 'AM'", function () {
      expect(motorcycleRider.licenseRestriction("AM")).to.equal(
        "Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16."
      );
    });
    it("returns given string when the argument given is 'A1'", function () {
      expect(motorcycleRider.licenseRestriction("A1")).to.equal(
        "Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16."
      );
    });
    it("returns given string when the argument given is 'A2'", function () {
      expect(motorcycleRider.licenseRestriction("A2")).to.equal(
        "Motorcycles with maximum power of 35KW. and the minimum age is 18."
      );
    });
    it("returns given string when the argument given is 'A'", function () {
      expect(motorcycleRider.licenseRestriction("A")).to.equal(
        "No motorcycle restrictions, and the minimum age is 24."
      );
    });
    it("returns error string when the argument given is different then the above - B", function () {
      expect(motorcycleRider.licenseRestriction.bind("B")).to.throw(
        "Invalid Information!"
      );
    });
    it("returns error string when the argument given is different then the above - B1", function () {
      expect(motorcycleRider.licenseRestriction.bind("B1")).to.throw(
        "Invalid Information!"
      );
    });
  });
  describe("motorcycleShowroom ", function () {
    it(`returns given string when the arguments given are (["125", "250", "600"]) and 1000`, function () {
      expect(
        motorcycleRider.motorcycleShowroom(["125", "250", "600"], 1000)
      ).to.equal("There are 3 available motorcycles matching your criteria!");
    });
    it(`returns given string when the arguments given are (["125", "250", "600", "49", "50"]) and 1000`, function () {
      expect(
        motorcycleRider.motorcycleShowroom(
          ["125", "250", "600", "49", "50"],
          1000
        )
      ).to.equal("There are 4 available motorcycles matching your criteria!");
    });
    it("returns error string when the arguments given are not an array and number - object", function () {
      expect(
        motorcycleRider.motorcycleShowroom.bind([1, 2, 3], {
          maximumEngineVolume: 100,
        })
      ).to.throw("Invalid Information!");
    });
    it("returns error string when the arguments given are not an array and number - string", function () {
      expect(motorcycleRider.motorcycleShowroom.bind("123", 100)).to.throw(
        "Invalid Information!"
      );
    });
    it("returns error string when the array argument is empty", function () {
      expect(motorcycleRider.motorcycleShowroom.bind([], 100)).to.throw(
        "Invalid Information!"
      );
    });
    it("returns error string when the number argument is less than 50", function () {
      expect(motorcycleRider.motorcycleShowroom.bind([1, 2, 3], 49)).to.throw(
        "Invalid Information!"
      );
    });
  });
  describe("otherSpendings ", function () {
    it("returns error string when the arguments given are not an array, array and boolean - first argument", function () {
      expect(
        motorcycleRider.otherSpendings.bind(
          "helmet, jacked",
          ["engine oil", "oil filter"],
          true
        )
      ).to.throw("Invalid Information!");
    });
    it("returns error string when the arguments given are not an array, array and boolean - second argument", function () {
      expect(
        motorcycleRider.otherSpendings.bind(
          ["helmet", "jacked"],
          "engine oil, oil filter",
          true
        )
      ).to.throw("Invalid Information!");
    });
    it("returns error string when the arguments given are not an array, array and boolean - third argument", function () {
      expect(
        motorcycleRider.otherSpendings.bind(
          ["helmet", "jacked"],
          ["engine oil", "oil filter"],
          "true"
        )
      ).to.throw("Invalid Information!");
    });
  });
});
