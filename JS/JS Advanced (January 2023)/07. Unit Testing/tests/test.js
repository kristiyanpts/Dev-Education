// function isOddOrEven(string) {
//   if (typeof string !== "string") {
//     return undefined;
//   }
//   if (string.length % 2 === 0) {
//     return "even";
//   }

//   return "odd";
// }

// describe("even or odd", function () {
//   it("isString", function () {
//     expect(isOddOrEven(3)).to.undefined;
//   });
//   it("isOdd", function () {
//     expect(isOddOrEven("s")).to.equal("odd");
//   });
//   it("isEven", function () {
//     expect(isOddOrEven("aa")).to.equal("even");
//   });
// });

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

describe("Motorcycle Rider", () => {
  it("licenseRestriction", () => {
    expect(motorcycleRider.licenseRestriction("AM")).to.equal(
      "Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16."
    );
    expect(motorcycleRider.licenseRestriction("A1")).to.equal(
      "Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16."
    );
    expect(motorcycleRider.licenseRestriction("A2")).to.equal(
      "Motorcycles with maximum power of 35KW. and the minimum age is 18."
    );
    expect(motorcycleRider.licenseRestriction("A")).to.equal(
      "No motorcycle restrictions, and the minimum age is 24."
    );
    expect(() => {
      motorcycleRider.licenseRestriction("Z");
    }).to.throw("Invalid Information!");
    expect(() => {
      motorcycleRider.licenseRestriction(5);
    }).to.throw("Invalid Information!");
  });

  it("motorcycleShowroom", () => {
    expect(() => {
      motorcycleRider.motorcycleShowroom("300", 350);
    }).to.throw("Invalid Information!");
    expect(() => {
      motorcycleRider.motorcycleShowroom(["300", "500"], "fifty");
    }).to.throw("Invalid Information!");
    expect(() => {
      motorcycleRider.motorcycleShowroom(["300", "500"], "5");
    }).to.throw("Invalid Information!");
    expect(() => {
      motorcycleRider.motorcycleShowroom([], 600);
    }).to.throw("Invalid Information!");
    expect(() => {
      motorcycleRider.motorcycleShowroom(["300"], -1);
    }).to.throw("Invalid Information!");
    expect(() => {
      motorcycleRider.motorcycleShowroom(["300"], 49);
    }).to.throw("Invalid Information!");
    expect(motorcycleRider.motorcycleShowroom(["50"], 50)).to.equal(
      "There are 1 available motorcycles matching your criteria!"
    );
    expect(
      motorcycleRider.motorcycleShowroom([300, 250, 400, 550, "five", -6], 600)
    ).to.equal("There are 4 available motorcycles matching your criteria!");
    expect(
      motorcycleRider.motorcycleShowroom([300, 40, 20, 50, "five", -6], 600)
    ).to.equal("There are 2 available motorcycles matching your criteria!");
    expect(
      motorcycleRider.motorcycleShowroom(
        ["300", "250", "400", "550", "fifty", "-1000"],
        600
      )
    ).to.equal("There are 4 available motorcycles matching your criteria!");
    expect(motorcycleRider.motorcycleShowroom([0], 600)).to.equal(
      "There are 0 available motorcycles matching your criteria!"
    );
  });

  it("otherSpendings", () => {
    expect(() => {
      motorcycleRider.otherSpendings(["helmet", "jacked"], "oil filter", true);
    }).to.throw("Invalid Information!");
    expect(() => {
      motorcycleRider.otherSpendings("helmet", ["oil filter"], true);
    }).to.throw("Invalid Information!");
    expect(() => {
      motorcycleRider.otherSpendings(["helmet", "jacked"], "oil filter", true);
    }).to.throw("Invalid Information!");
    expect(
      motorcycleRider.otherSpendings(["helmet", "jacked"], [], true)
    ).to.equal(
      "You spend $450.00 for equipment and consumables with 10% discount!"
    );
    expect(
      motorcycleRider.otherSpendings(["helmet", "jacked"], [], false)
    ).to.equal("You spend $500.00 for equipment and consumables!");
    expect(
      motorcycleRider.otherSpendings(["helmet"], ["engine oil"], true)
    ).to.equal(
      "You spend $243.00 for equipment and consumables with 10% discount!"
    );
    expect(
      motorcycleRider.otherSpendings([], ["engine oil", "oil filter"], false)
    ).to.equal("You spend $100.00 for equipment and consumables!");
    expect(
      motorcycleRider.otherSpendings([], ["engine oil", "oil filter"], true)
    ).to.equal(
      "You spend $90.00 for equipment and consumables with 10% discount!"
    );
  });
});
