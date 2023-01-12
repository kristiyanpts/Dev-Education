function Main(n, k) {
  let elements = [1];
  for (let i = 0; i < n - 1; i++) {
    elements.push(GetLastSum(k));
  }

  return elements;

  function GetLastSum(currIndex) {
    let sum = 0;
    for (
      let i = elements.length - 1;
      i > elements.length - currIndex - 1;
      i--
    ) {
      if (i < 0) {
        break;
      }
      sum += elements[i];
    }
    return sum;
  }
}

Main(8, 3);
