function add(num) {
  let sum = num;
  function solve(num2) {
    sum += num2;
    return solve;
  }
  solve.toString = () => {
    return sum;
  };
  return solve;
}

console.log(add(1)(6)(-3)(2)(5).toString());
