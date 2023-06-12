function addItem() {
  let itemText = document.getElementById("newItemText");
  let itemValue = document.getElementById("newItemValue");
  let newOption = document.createElement("option");
  newOption.value = itemValue.value;
  newOption.textContent = itemText.value;
  document.getElementById("menu").appendChild(newOption);
  itemText.value = "";
  itemValue.value = "";
}
