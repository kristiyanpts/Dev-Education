let mathEnforcer = {
  addFive: function (num) {
    if (typeof num !== "number") {
      return undefined;
    }
    return num + 5;
  },
  subtractTen: function (num) {
    if (typeof num !== "number") {
      return undefined;
    }
    return num - 10;
  },
  sum: function (num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      return undefined;
    }
    return num1 + num2;
  },
};

let expect = require("chai").expect;

describe("Math Enforcer test", () => {
  describe("addFive", () => {
    it("returns undefined if the argument passed isnt a number - string", () => {
      expect(mathEnforcer.addFive("1")).to.be.undefined;
    });
    it("returns undefined if the argument passed isnt a number - array", () => {
      expect(mathEnforcer.addFive([1])).to.be.undefined;
    });
    it("returns 6 if the argument passed is 1", () => {
      expect(mathEnforcer.addFive(1)).to.equal(6);
    });
    it("returns 4 if the argument passed is -1", () => {
      expect(mathEnforcer.addFive(-1)).to.equal(4);
    });
    it("returns 5.1 if the argument passed is 0.1", () => {
      expect(mathEnforcer.addFive(0.1)).to.be.closeTo(5.1, 0.1);
    });
    it("returns 4.9 if the argument passed is -0.1", () => {
      expect(mathEnforcer.addFive(-0.1)).to.be.closeTo(4.9, 0.1);
    });
  });
  describe("subtractTen", () => {
    it("returns undefined if the argument passed isnt a number - string", () => {
      expect(mathEnforcer.subtractTen("11")).to.be.undefined;
    });
    it("returns undefined if the argument passed isnt a number - array", () => {
      expect(mathEnforcer.subtractTen([11])).to.be.undefined;
    });
    it("returns 1 if the argument passed is 11", () => {
      expect(mathEnforcer.subtractTen(11)).to.equal(1);
    });
    it("returns -11 if the argument passed is -1", () => {
      expect(mathEnforcer.subtractTen(-1)).to.equal(-11);
    });
    it("returns 0.1 if the argument passed is 10.1", () => {
      expect(mathEnforcer.subtractTen(10.1)).to.be.closeTo(0.1, 0.1);
    });
    it("returns -10.1 if the argument passed is -0.1", () => {
      expect(mathEnforcer.subtractTen(-0.1)).to.be.closeTo(-10.1, 0.1);
    });
  });
  describe("sum", () => {
    it("returns undefined if the first argument isnt a number - string", () => {
      expect(mathEnforcer.sum("1", 1)).to.be.undefined;
    });
    it("returns undefined if the first argument isnt a number - array", () => {
      expect(mathEnforcer.sum([1], 1)).to.be.undefined;
    });
    it("returns undefined if the second argument isnt a number - string", () => {
      expect(mathEnforcer.sum(1, "1")).to.be.undefined;
    });
    it("returns undefined if the second argument isnt a number - array", () => {
      expect(mathEnforcer.sum(1, [1])).to.be.undefined;
    });
    it("returns undefined if the both argument arent numbers", () => {
      expect(mathEnforcer.sum("1", "1")).to.be.undefined;
    });
    it("returns 2 if both arguments are 1", () => {
      expect(mathEnforcer.sum(1, 1)).to.equal(2);
    });
    it("returns -2 if both arguments are -1", () => {
      expect(mathEnforcer.sum(-1, -1)).to.equal(-2);
    });
    it("returns close to 0.2 if both arguments are 0.1", () => {
      expect(mathEnforcer.sum(0.1, 0.1)).to.be.closeTo(0.2, 0.001);
    });
    it("returns close to -0.2 if both arguments are -0.1", () => {
      expect(mathEnforcer.sum(-0.1, -0.1)).to.be.closeTo(-0.2, 0.001);
    });
  });
});
