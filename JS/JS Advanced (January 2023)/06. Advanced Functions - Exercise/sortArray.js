function Main(arr, order) {
  if (order === "asc") {
    return AscOrder(arr);
  } else {
    return DescOrder(arr);
  }

  function AscOrder(arr) {
    return arr.sort((a, b) => a - b);
  }

  function DescOrder(arr) {
    return arr.sort((a, b) => b - a);
  }
}

Main([14, 7, 17, 6, 8], "asc");
