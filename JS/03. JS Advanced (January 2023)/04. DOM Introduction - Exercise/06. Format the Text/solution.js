function solve() {
  let text = document
    .getElementById("input")
    .value.split(".")
    .filter((x) => x !== "")
    .map((x) => x + ".");
  let output = document.getElementById("output");

  let length = Math.ceil(text.length / 3);
  for (let k = 0; k < length; k++) {
    output.innerHTML += `<p>${text.splice(0, 3).join("")}</p>`;
  }
}
