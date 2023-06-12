function rectangle(width, height, color) {
  color = color.charAt(0).toUpperCase() + color.substring(1);
  let rectObject = {
    width: width,
    height: height,
    color: color,
    calcArea: function () {
      return this.width * this.height;
    },
  };

  return rectObject;
}

let rect = rectangle(4, 5, "red");

console.log(rect.width);

console.log(rect.height);

console.log(rect.color);

console.log(rect.calcArea());
