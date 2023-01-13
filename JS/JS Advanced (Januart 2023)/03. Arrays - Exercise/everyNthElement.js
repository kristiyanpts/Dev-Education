function Main(arr, n) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += n) {
    newArr.push(arr[i]);
  }
  return newArr;
}

Main(["5", "20", "31", "4", "20"], 2);
Main(["dsa", "asd", "test", "tset"], 2);
Main(["1", "2", "3", "4", "5"], 6);
