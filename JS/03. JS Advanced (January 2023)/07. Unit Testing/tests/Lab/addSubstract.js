function createCalculator() {
  let value = 0;

  return {
    add: function (num) {
      value += Number(num);
    },

    subtract: function (num) {
      value -= Number(num);
    },

    get: function () {
      return value;
    },
  };
}

let expect = require("chai").expect;

describe("Add / Subtract test", () => {
  let calc = null;
  beforeEach(() => {
    calc = createCalculator();
  });

  it("returns an object with function add", () => {
    expect(calc.add).to.not.be.undefined;
  });
  it("returns an object with function subtract", () => {
    expect(calc.subtract).to.not.be.undefined;
  });
  it("returns an object with function get", () => {
    expect(calc.get).to.not.be.undefined;
  });
  it("keeps an internal sum that can’t be modified from the outside", () => {
    expect(calc.value).to.be.undefined;
  });
  it("return 1 if we add 1 to the initial value", () => {
    calc.add(1);
    expect(calc.get()).to.equal(1);
  });
  it("return 1 if we add 1 as a string to the initial value", () => {
    calc.add("1");
    expect(calc.get()).to.equal(1);
  });
  it("return -1 if we subtract 1 from the initial value", () => {
    calc.subtract(1);
    expect(calc.get()).to.equal(-1);
  });
  it("return -1 if we subtract 1 as string from the initial value", () => {
    calc.subtract("1");
    expect(calc.get()).to.equal(-1);
  });
  it("return NaN if we add a string to the initial value", () => {
    calc.add("Test String 1");
    expect(calc.get()).to.be.NaN;
  });
  it("return NaN if we subtract a string to the initial value", () => {
    calc.subtract("Test String 1");
    expect(calc.get()).to.be.NaN;
  });
});
