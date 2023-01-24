function addItem() {
  document.getElementById("items").innerHTML += `<li>${
    document.getElementById("newItemText").value
  } <a href = "#">[Delete]</a></li>`;

  document.getElementById("items").addEventListener("click", DeleteElement);

  function DeleteElement(elem) {
    console.log(elem);
    elem.target.parentElement.remove();
  }
}
