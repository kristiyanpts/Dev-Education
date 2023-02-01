function sum(arr) {
  let sum = 0;

  for (let num of arr) {
    sum += Number(num);
  }

  return sum;
}

let expect = require("chai").expect;

describe("Sum of Numbers test", () => {
  it("returs 0 for array with length 0", () => {
    expect(sum([])).to.equal(0);
  });
  it("returs 1 for array with only the number 1 in it", () => {
    expect(sum([1])).to.equal(1);
  });
  it("returs NaN for array with strings in it", () => {
    expect(sum(["Test String 1", "Test String 1"])).to.be.NaN;
  });
});
