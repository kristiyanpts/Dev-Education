function Main(year, month, day) {
  let date = new Date(year, month - 1, day - 1);
  console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
}

Main(2016, 9, 30);
Main(2015, 5, 10);
