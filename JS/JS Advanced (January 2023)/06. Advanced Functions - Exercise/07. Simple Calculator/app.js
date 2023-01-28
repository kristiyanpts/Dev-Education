function calculator() {
  let object = {
    fNum: 0,
    sNum: 0,
    result: 0,
    init: function (selector1, selector2, resultSelector) {
      this.fNum = document.querySelector(selector1);
      this.sNum = document.querySelector(selector2);
      this.result = document.querySelector(resultSelector);
    },
    add: function () {
      this.result.value = Number(this.fNum.value) + Number(this.sNum.value);
    },
    subtract: function () {
      this.result.value = Number(this.fNum.value) - Number(this.sNum.value);
    },
  };

  return object;
}

const calculate = calculator();
calculate.init("#num1", "#num2", "#result");
console.log(calculate);
