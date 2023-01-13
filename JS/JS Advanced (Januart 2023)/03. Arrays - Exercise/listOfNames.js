function Main(arr) {
  arr = arr.sort((a, b) => a.localeCompare(b));
  for (let i = 0; i < arr.length; i++) {
    console.log(`${i + 1}. ${arr[i]}`);
  }
}

Main(["John", "Bob", "Christina", "Ema"]);
