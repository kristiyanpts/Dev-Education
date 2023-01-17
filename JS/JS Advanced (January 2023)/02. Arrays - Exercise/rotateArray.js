function Main(arr, rotations) {
  for (let i = 0; i < rotations; i++) {
    let lastElem = arr.pop();
    arr.unshift(lastElem);
  }
  console.log(arr.join(" "));
}

Main(["Banana", "Orange", "Coconut", "Apple"], 15);
