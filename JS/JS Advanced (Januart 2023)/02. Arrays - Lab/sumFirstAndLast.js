function Main(arr) {
  arr = arr.map(Number);
  return arr[0] + arr[arr.length - 1];
}

Main(["20", "30", "40"]);
