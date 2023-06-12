function Main(month, year) {
  Date = new Date(year, month, 0);
  console.log(Date.getDate());
}

Main(2, 2024);
