function createSortedList() {
  const list = {
    numbers: [],
    size: 0,
    add: function (element) {
      this.numbers.push(element);
      this.size = this.numbers.length;
      this.sort();
    },
    remove: function (index) {
      if (this.numbers[index] !== undefined) {
        this.numbers.splice(index, 1);
      }
      this.size = this.numbers.length;
      this.sort();
    },
    get: function (index) {
      if (this.numbers[index] !== undefined) {
        return this.numbers[index];
      }
    },
    sort: function () {
      this.numbers = this.numbers.sort((a, b) => a - b);
    },
  };

  return list;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
