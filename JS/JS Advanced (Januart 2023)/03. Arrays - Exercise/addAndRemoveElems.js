function Main(arr) {
  let newArr = [];
  let num = 1;
  for (const command of arr) {
    if (command === "add") {
      newArr.push(num);
    } else if (command === "remove") {
      newArr.pop();
    }
    num++;
  }
  console.log(newArr.length > 0 ? newArr.join("\n") : "Empty");
}

Main(["remove", "remove", "remove"]);
