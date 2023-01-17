function Main(arr) {
  let newArr = [];

  while (arr.length > 0) {
    let smallestNum = FindSmallestNum(arr);
    newArr.push(smallestNum);
    arr.splice(arr.indexOf(smallestNum), 1);
    if (arr.length <= 0) {
      break;
    }
    let biggestNum = FindBiggestNum(arr);
    newArr.push(biggestNum);
    arr.splice(arr.indexOf(biggestNum), 1);
  }

  return newArr;

  function FindSmallestNum(arr) {
    let num = arr[0];
    for (const arrNum of arr) {
      if (arrNum < num) {
        num = arrNum;
      }
    }

    return num;
  }

  function FindBiggestNum(arr) {
    let num = arr[0];
    for (const arrNum of arr) {
      if (arrNum > num) {
        num = arrNum;
      }
    }

    return num;
  }
}

Main([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
