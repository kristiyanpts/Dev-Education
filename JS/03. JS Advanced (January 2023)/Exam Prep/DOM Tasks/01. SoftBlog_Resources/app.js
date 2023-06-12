function solve() {
  let inputFields = Array.from(document.getElementsByTagName("input"));
  let content = document.getElementById("content");
  let buttonCreate = document.getElementsByClassName("btn create")[0];
  let section = document.querySelector("main section");
  let sectionOl = document.querySelector(".archive-section ol");

  buttonCreate.addEventListener("click", CreatePost);

  function CreatePost(e) {
    e.preventDefault();
    let [author, title, category] = inputFields.map((e) => `${e.value}`);

    let article = document.createElement("article");
    article.innerHTML = `<h1>${title}</h1><p>Category: <strong>${category}</strong></p><p>Creator: <strong>${author}</strong></p><p>${content.value}</p>`;
    let divButtons = document.createElement("div");
    divButtons.setAttribute("class", "buttons");
    let buttonDelete = document.createElement("button");
    buttonDelete.setAttribute("class", "btn delete");
    buttonDelete.textContent = "Delete";
    let buttonArchive = document.createElement("button");
    buttonArchive.setAttribute("class", "btn archive");
    buttonArchive.textContent = "Archive";
    buttonDelete.addEventListener("click", DeletePost);
    buttonArchive.addEventListener("click", ArchivePost);
    divButtons.appendChild(buttonDelete);
    divButtons.appendChild(buttonArchive);
    article.appendChild(divButtons);
    section.appendChild(article);
    for (let i = 0; i < inputFields.length; i++) {
      inputFields[i].value = "";
    }
    content.value = "";

    function DeletePost() {
      article.remove();
    }

    function ArchivePost() {
      article.remove();
      sectionOl.innerHTML += `<li>${title}</li>`;
      SortOl();
    }

    function SortOl() {
      var list, i, switching, b, shouldSwitch;
      list = sectionOl;
      switching = true;
      while (switching) {
        switching = false;
        b = list.getElementsByTagName("LI");
        for (i = 0; i < b.length - 1; i++) {
          shouldSwitch = false;
          if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
        if (shouldSwitch) {
          b[i].parentNode.insertBefore(b[i + 1], b[i]);
          switching = true;
        }
      }
    }
  }
}
