function Main(arr) {
  let newArr = [];
  let cbn = arr[0];
  for (const num of arr) {
    if (num >= cbn) {
      newArr.push(num);
      cbn = num;
    }
  }
  return newArr;
}

Main([20, 1, 2, 3, 4]);
