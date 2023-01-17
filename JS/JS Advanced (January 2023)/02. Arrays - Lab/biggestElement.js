function Main(arr) {
  let biggestElement = -Infinity;
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[row].length; col++) {
      if (arr[row][col] > biggestElement) {
        biggestElement = arr[row][col];
      }
    }
  }
  return biggestElement;
}

Main([
  [20, 50, 10],

  [8, 33, 145],
]);
Main([
  [3, 5, 7, 12],
  [-1, 4, 33, 2],
  [8, 3, 0, 4],
]);
