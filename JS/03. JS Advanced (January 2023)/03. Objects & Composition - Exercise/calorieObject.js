function Main(arr) {
  let calories = {};

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      calories[arr[i]] = 0;
    } else {
      calories[arr[i - 1]] = Number(arr[i]);
    }
  }

  console.log(calories);
}

Main(["Potato", "93", "Skyr", "63", "Cucumber", "18", "Milk", "42"]);
