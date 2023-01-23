function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    let searchThrough = Array.from(
      document.getElementsByClassName("container")[0].children[2].children
    );
    let searchingFor = document.getElementById("searchField").value;

    for (let i = 0; i < searchThrough.length; i++) {
      let children = searchThrough[i].children;

      for (let k = 0; k < children.length; k++) {
        if (children[k].textContent.includes(searchingFor)) {
          children[k].parentElement.classList.add("select");
        }
      }
    }
  }
}
