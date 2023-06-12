function extractText() {
  let list = document.getElementById("items").children;
  let items = [];
  for (let i = 0; i < list.length; i++) {
    items.push(list[i].innerText);
  }
  document.getElementById("result").innerHTML = items.join("\r\n");
}
