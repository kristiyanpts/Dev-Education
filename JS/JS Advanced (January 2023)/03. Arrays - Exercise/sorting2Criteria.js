function Main(arr) {
  arr = arr.sort((a, b) => a.localeCompare(b));
  arr = arr.sort((a, b) => a.length - b.length);
  console.log(arr.join("\n"));
}

Main(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
