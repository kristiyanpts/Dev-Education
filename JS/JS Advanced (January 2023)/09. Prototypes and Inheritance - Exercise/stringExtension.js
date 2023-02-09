(function solve() {
  String.prototype.ensureStart = function (str) {
    let starts = true;
    for (let i = 0; i < str.length; i++) {
      if (this[i] !== str[i]) {
        starts = false;
      }
    }
    if (starts) {
      return `${this}`;
    } else {
      return `${str} ` + this;
    }
  };

  String.prototype.ensureEnd = function (str) {
    let ends = true;
    for (let i = this.length - 1; i > str.length; i--) {
      if (this[i] !== str[i]) {
        ends = false;
      }
    }
    if (ends) {
      return this;
    } else {
      return this + ` ${str}`;
    }
  };

  String.prototype.isEmpty = function () {
    if (this.length === 0) return true;
    return false;
  };

  String.prototype.truncate = function (n) {
    if (n < 4) return ".".repeat(n);
    let currString = this.toString();
    if (this.length <= n) return currString;
    let lastSpace = currString.slice(0, n - 3).lastIndexOf(" ");
    if (lastSpace !== -1) return currString.slice(0, lastSpace) + "...";
    return currString.substring(0, n - 3) + "...";
  };

  String.format = function (string, ...params) {
    for (let i = 0; i < params.length; i++) {
      string = string.replace(`{${i}}`, params[i]);
    }
    return string;
  };
})();

let str = "my string";
str = str.ensureStart("my");
console.log(str);
str = str.ensureStart("hello ");
console.log(str);
str = str.truncate(16);
console.log(str);
str = str.truncate(14);
console.log(str);
str = str.truncate(8);
console.log(str);
str = str.truncate(4);
console.log(str);
str = str.truncate(2);
console.log(str);
str = String.format(
  "The {0} {1} fox",

  "quick",
  "brown"
);
console.log(str);
str = String.format(
  "jumps {0} {1}",

  "dog"
);
console.log(str);
