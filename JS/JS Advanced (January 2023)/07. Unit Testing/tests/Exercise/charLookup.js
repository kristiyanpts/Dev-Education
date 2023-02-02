function lookupChar(string, index) {
  if (typeof string !== "string" || !Number.isInteger(index)) {
    return undefined;
  }
  if (string.length <= index || index < 0) {
    return "Incorrect index";
  }
  return string.charAt(index);
}

let expect = require("chai").expect;

describe("Char Lookup test", () => {
  it("returns undefined if the first argument isnt a string - number", () => {
    expect(lookupChar(123, 1)).to.be.undefined;
  });
  it("returns undefined if the first argument isnt a string - array", () => {
    expect(lookupChar([123], 1)).to.be.undefined;
  });
  it("returns undefined if the second argument isnt an integer - string", () => {
    expect(lookupChar("string", "1")).to.be.undefined;
  });
  it("returns undefined if the second argument isnt an integer - array", () => {
    expect(lookupChar("string", [1])).to.be.undefined;
  });
  it("returns undefined if the second argument isnt an integer - decimal", () => {
    expect(lookupChar("string", 1.13)).to.be.undefined;
  });
  it("returns undefined if both arguments are incorrect", () => {
    expect(lookupChar(123, "1")).to.be.undefined;
  });
  it("returns 'Incorrect index' if the index is less than 0", () => {
    expect(lookupChar("string", -1)).to.equal("Incorrect index");
  });
  it("returns 'Incorrect index' if the index is bigger than the strings length", () => {
    expect(lookupChar("string", 7)).to.equal("Incorrect index");
  });
  it("returns 'Incorrect index' if the index is exactly as the length of the string", () => {
    expect(lookupChar("string", 6)).to.equal("Incorrect index");
  });
  it("returns 's' if the index passed is 0", () => {
    expect(lookupChar("string", 0)).to.equal("s");
  });
  it("returns 'g' if the index passed is 5", () => {
    expect(lookupChar("string", 5)).to.equal("g");
  });
});
