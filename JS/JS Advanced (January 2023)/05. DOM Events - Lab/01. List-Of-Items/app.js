function addItem() {
  document.getElementById("items").innerHTML += `<li>${
    document.getElementById("newItemText").value
  }</li>`;
}
