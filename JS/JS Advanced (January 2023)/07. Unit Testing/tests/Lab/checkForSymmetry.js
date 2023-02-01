function isSymmetric(arr) {
  if (!Array.isArray(arr)) {
    return false; // Non-arrays are non-symmetric
  }

  let reversed = arr.slice(0).reverse(); // Clone and reverse

  let equal = JSON.stringify(arr) == JSON.stringify(reversed);

  return equal;
}

let expect = require("chai").expect;

describe("Check for Symmetry test", () => {
  it("returns false for any input that isn’t of the correct type - number", () => {
    const argument = 123;
    expect(isSymmetric(argument)).to.be.false;
  });
  it("returns false for any input that isn’t of the correct type - string", () => {
    const argument = "123";
    expect(isSymmetric(argument)).to.be.false;
  });
  it("returns true for if the input array is symmetric - even length", () => {
    const argument = [1, 2, 2, 1];
    expect(isSymmetric(argument)).to.be.true;
  });
  it("returns true for if the input array is symmetric - odd length", () => {
    const argument = [1, 2, 1];
    expect(isSymmetric(argument)).to.be.true;
  });
  it("returns false for if the input array is asymmetric - even length", () => {
    const argument = [1, 2, 3, 1];
    expect(isSymmetric(argument)).to.be.false;
  });
  it("returns false for if the input array is asymmetric - odd length", () => {
    const argument = [1, 2, 3];
    expect(isSymmetric(argument)).to.be.false;
  });
  it("returns false for if the input array is symmetric, values are different types", () => {
    const argument = [1, 2, "1"];
    expect(isSymmetric(argument)).to.be.false;
  });
});
