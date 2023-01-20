function sumTable() {
  let table = document.getElementsByTagName("table")[0].children[0].children;
  let sum = 0;

  for (let i = 0; i < table.length; i++) {
    let curNum = Number(table[i].children[1].innerText);
    console.log(curNum);
    sum += Number.isNaN(curNum) ? 0 : curNum;
  }

  document.getElementById("sum").innerText = sum;
}
