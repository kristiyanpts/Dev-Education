function search() {
  let list = Array.from(document.getElementById("towns").children);
  let searchWord = document.getElementById("searchText").value;
  let matchesFound = 0;

  for (let i = 0; i < list.length; i++) {
    console.log(list[i].textContent, searchWord);
    if (list[i].textContent.includes(searchWord)) {
      list[i].style.textDecoration = "underline";
      list[i].style.fontWeight = "bold";
      matchesFound++;
    }
  }

  document.getElementById(
    "result"
  ).textContent = `${matchesFound} matches found`;
}
