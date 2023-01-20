function colorize() {
  let table = document.getElementsByTagName("tr");

  for (let i = 1; i < table.length; i++) {
    if ((i + 1) % 2 === 0) {
      table[i].style.backgroundColor = "teal";
    }
  }
}
