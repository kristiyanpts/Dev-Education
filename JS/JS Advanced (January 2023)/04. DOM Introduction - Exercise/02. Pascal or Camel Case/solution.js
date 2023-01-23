function solve() {
  let string = document.getElementById("text").value;
  let stringCase = document.getElementById("naming-convention").value;

  switch (stringCase) {
    case "Camel Case":
      string = string.split(" ");
      for (let i = 1; i < string.length; i++) {
        string[i] = string[i][0].toUpperCase() + string[i].substring(1);
      }
      document.getElementById("result").innerText = string.join("");
      break;
    case "Pascal Case":
      string = string.split(" ");
      for (let i = 0; i < string.length; i++) {
        string[i] =
          string[i][0].toUpperCase() + string[i].substring(1).toLowerCase();
      }
      document.getElementById("result").innerText = string.join("");
      break;
    default:
      document.getElementById("result").innerText = "Error!";
      break;
  }
}
