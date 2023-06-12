function rgbToHexColor(red, green, blue) {
  if (!Number.isInteger(red) || red < 0 || red > 255) {
    return undefined; // Red value is invalid
  }

  if (!Number.isInteger(green) || green < 0 || green > 255) {
    return undefined; // Green value is invalid
  }
  if (!Number.isInteger(blue) || blue < 0 || blue > 255) {
    return undefined; // Blue value is invalid
  }
  return (
    "#" +
    ("0" + red.toString(16).toUpperCase()).slice(-2) +
    ("0" + green.toString(16).toUpperCase()).slice(-2) +
    ("0" + blue.toString(16).toUpperCase()).slice(-2)
  );
}

let expect = require("chai").expect;

describe("RGB to Hex test", () => {
  it("returns undefined if an argument is not an integer - string", () => {
    let red = "255",
      green = 255,
      blue = 255;
    expect(rgbToHexColor(red, green, blue)).to.be.undefined;
  });
  it("returns undefined if an argument is not an integer - object", () => {
    let red = { color: 255 },
      green = 255,
      blue = 255;
    expect(rgbToHexColor(red, green, blue)).to.be.undefined;
  });
  it("returns undefined if an argument is a fractional number", () => {
    let red = 2.55,
      green = 255,
      blue = 255;
    expect(rgbToHexColor(red, green, blue)).to.be.undefined;
  });
  it("returns undefined if no arguments are passed", () => {
    expect(rgbToHexColor()).to.be.undefined;
  });
  it("returns undefined if an argument is lower than 0 - first arg", () => {
    let red = -255,
      green = 255,
      blue = 255;
    expect(rgbToHexColor(red, green, blue)).to.be.undefined;
  });
  it("returns undefined if an argument is lower than 0 - second arg", () => {
    let red = 255,
      green = -255,
      blue = 255;
    expect(rgbToHexColor(red, green, blue)).to.be.undefined;
  });
  it("returns undefined if an argument is lower than 0 - third arg", () => {
    let red = 255,
      green = 255,
      blue = -255;
    expect(rgbToHexColor(red, green, blue)).to.be.undefined;
  });
  it("returns undefined if an argument is bigger than 255", () => {
    let red = 300,
      green = 255,
      blue = 255;
    expect(rgbToHexColor(red, green, blue)).to.be.undefined;
  });
  it("returns #FFFFFF if all arguments are 255", () => {
    let red = 255,
      green = 255,
      blue = 255;
    expect(rgbToHexColor(red, green, blue)).to.equal("#FFFFFF");
  });
  it("returns #000000 if all arguments are 0", () => {
    let red = 0,
      green = 0,
      blue = 0;
    expect(rgbToHexColor(red, green, blue)).to.equal("#000000");
  });
  it("should pad values with zeros", function () {
    expect(rgbToHexColor(12, 13, 14)).to.equal("#0C0D0E");
  });
});
