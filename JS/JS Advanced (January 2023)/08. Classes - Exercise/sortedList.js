class List {
  constructor() {
    this.numbers = [];
    this.size = 0;
  }

  add(element) {
    this.numbers.push(element);
    this.size = this.numbers.length;
    this.sortNumbers();
  }

  remove(index) {
    if (this.numbers[index] !== undefined) {
      this.numbers.splice(index, 1);
      this.size = this.numbers.length;
      this.sortNumbers();
    }
  }

  get(index) {
    if (this.numbers[index] !== undefined) {
      return this.numbers[index];
    }
  }

  sortNumbers() {
    this.numbers.sort((a, b) => a - b);
  }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
