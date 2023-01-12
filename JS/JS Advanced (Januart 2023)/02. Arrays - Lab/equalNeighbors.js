function Main(matrix) {
  let neighborsAmt = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (
        matrix[row + 1] !== undefined &&
        matrix[row][col] === matrix[row + 1][col]
      ) {
        neighborsAmt++;
      }
      if (
        matrix[row][col + 1] !== undefined &&
        matrix[row][col] === matrix[row][col + 1]
      ) {
        neighborsAmt++;
      }
    }
  }
  console.log(neighborsAmt);
}

Main([
  ["2", "2", "5", "7", "4"],
  ["4", "0", "5", "3", "4"],
  ["2", "5", "5", "4", "2"],
]);
