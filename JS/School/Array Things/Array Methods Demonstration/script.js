let numbers = [];

function AddElement() {
  let num = Number(document.getElementById("elements").value);
  numbers.push(num);
}

function ShowElements() {
  document.getElementById("elements-shown").innerText = numbers.join(" ");
}
