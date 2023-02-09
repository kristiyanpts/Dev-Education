(function solve() {
  Array.prototype.last = () => {
    return this[this.length - 1];
  };

  Array.prototype.skip = (n) => {
    let newArr = [];
    for (let i = n; i < this.length; i++) {
      newArr.push(this[i]);
    }
    return newArr;
  };

  Array.prototype.take = (n) => {
    let newArr = [];
    for (let i = 0; i < n; i++) {
      newArr.push(this[i]);
    }
    return newArr;
  };

  Array.prototype.sum = () => {
    let sum = 0;
    for (let i = 0; i < this.length; i++) {
      sum += this[i];
    }
    return sum;
  };

  Array.prototype.average = () => {
    return this.sum() / this.length;
  };
})();

let myArr = [1, 2, 3];
console.log(myArr.last());
