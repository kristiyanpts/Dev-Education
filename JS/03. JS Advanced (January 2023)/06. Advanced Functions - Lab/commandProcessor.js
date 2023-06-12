function solution() {
  let ourString = "";

  function append(text) {
    ourString += text;
  }

  function removeStart(amtOfChars) {
    ourString = ourString.substring(amtOfChars - 1, ourString.length);
  }

  function removeEnd(amtOfChars) {
    ourString = ourString.substring(1, ourString.length - amtOfChars);
  }

  function print() {
    console.log(ourString);
  }

  return { append, removeEnd, removeStart, print };
}

let firstZeroTest = solution();
firstZeroTest.append("hello");
firstZeroTest.append("again");
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

let secondZeroTest = solution();
55555555;
secondZeroTest.append("123");
secondZeroTest.append("45");
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();
