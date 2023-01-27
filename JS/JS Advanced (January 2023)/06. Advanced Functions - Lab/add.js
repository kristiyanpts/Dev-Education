function solution(number) {
  return (addNum) => {
    return number + addNum;
  };
}

let add7 = solution(7);

console.log(add7(2));

console.log(add7(3));
