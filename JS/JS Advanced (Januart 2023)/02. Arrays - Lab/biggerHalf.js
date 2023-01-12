function Main(arr) {
  arr = arr.sort((a, b) => a - b);
  let newArr = [];

  for (
    let i = arr.length - 1;
    i >= arr.length - Math.ceil(arr.length / 2);
    i--
  ) {
    newArr.push(arr[i]);
  }

  return newArr.sort((a, b) => a - b);
}

Main([4, 7, 2, 5]);
Main([3, 19, 14, 7, 2, 19, 6]);
