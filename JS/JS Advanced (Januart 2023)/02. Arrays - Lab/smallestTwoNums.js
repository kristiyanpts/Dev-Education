function Main(arr) {
  arr = arr.sort((a, b) => a - b);
  console.log(arr[0], arr[1]);
}

Main([30, 15, 50, 5]);
Main([3, 0, 10, 4, 7, 3]);
