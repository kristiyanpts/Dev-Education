(function solve() {
  String.prototype.ensureStart = (str) => {
    let starts = true;
    for (let i = 0; i < str.length; i++) {
      if (this[i] !== str[i]) {
        starts = false;
      }
    }
    if (starts) {
      return this;
    } else {
      return `${str} ` + this;
    }
  };

  String.prototype.ensureEnd = (str) => {
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

  String.prototype.isEmpty = () => {
    if (this.length === 0) return true;
    return false;
  };

  String.prototype.truncate = (n) => {
    if (n < 4) {
      return ".".repeat(n);
    }
    if (this.length < n) {
      return this;
    } else if (this.length > n) {
      let words = this.split(" ");
      let currentLength = 0;
      let removeAfterIndex = 0;
      if (words.length > 1) {
        for (let i = 0; i < words.length; i++) {
          currentLength += words[i].length;
          if (currentLength >= n) {
            removeAfterIndex = i;
            break;
          }
        }
        words.splice(removeAfterIndex, words.length - removeAfterIndex);
        return words.join(" ") + "...";
      } else {
        return words[0].substring(0, words[0].length - n) + "...";
      }
    }
  };

  String.format = (string, ...params) => {
    for (let i = 0; i < params.length; i++) {
      string = string.replace(`{${i}}`, params[i]);
    }

    return string;
  };
})();

let str = "my string";
console.log(str);
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
