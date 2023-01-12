function Main(matrix) {
  let fDiagonal = 0;
  let sDiagonal = 0;
  for (let row = 0; row < matrix.length; row++) {
    fDiagonal += matrix[row][row];
    sDiagonal += matrix[row][matrix.length - row - 1];
  }
  console.log(fDiagonal, sDiagonal);
}

Main([
  [20, 40],
  [10, 60],
]);
