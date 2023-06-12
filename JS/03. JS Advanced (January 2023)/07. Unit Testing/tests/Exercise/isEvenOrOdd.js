function isOddOrEven(string) {
  if (typeof string !== "string") {
    return undefined;
  }

  if (string.length % 2 === 0) {
    return "even";
  }

  return "odd";
}

let expect = require("chai").expect;

describe("Even or Odd test", () => {
  it("returns undefined if the argument passed is not a string - number", () => {
    expect(isOddOrEven(1)).to.be.undefined;
  });
  it("returns undefined if the argument passed is not a string - array", () => {
    expect(isOddOrEven([1])).to.be.undefined;
  });
  it("returns even for if the argument passed is an even length string", () => {
    expect(isOddOrEven("even")).to.equal("even");
  });
  it("returns even for if the argument passed is an even length string - random string", () => {
    expect(isOddOrEven("apples")).to.equal("even");
  });
  it("returns odd for if the argument passed is an odd length string", () => {
    expect(isOddOrEven("odd")).to.equal("odd");
  });
  it("returns odd for if the argument passed is an odd length string - random string", () => {
    expect(isOddOrEven("apple")).to.equal("odd");
  });
});
