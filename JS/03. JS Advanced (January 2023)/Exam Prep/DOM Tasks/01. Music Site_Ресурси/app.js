window.addEventListener("load", solve);

function solve() {
  let inputFields = Array.from(document.getElementsByTagName("input"));
  let buttonAdd = document.getElementById("add-btn");
  let collection = document.getElementsByClassName("all-hits-container")[0];
  let saved = document.getElementsByClassName("saved-container")[0];
  let likes = document.querySelector(".likes p");

  buttonAdd.addEventListener("click", AddSong);

  function AddSong(e) {
    e.preventDefault();
    let [genre, name, author, date] = inputFields.map((e) => `${e.value}`);

    if (genre == "" || name == "" || author == "" || date == "") {
      return;
    }

    let div = document.createElement("div");
    div.setAttribute("class", "hits-info");
    div.innerHTML = `<img src="./static/img/img.png"><h2>Genre: ${genre}</h2><h2>Name: ${name}</h2><h2>Author: ${author}</h2><h3>Date: ${date}</h3>`;
    let buttonSave = document.createElement("button");
    buttonSave.setAttribute("class", "save-btn");
    buttonSave.textContent = "Save song";
    let buttonLike = document.createElement("button");
    buttonLike.setAttribute("class", "like-btn");
    buttonLike.textContent = "Like song";
    let buttonDelete = document.createElement("button");
    buttonDelete.setAttribute("class", "delete-btn");
    buttonDelete.textContent = "Delete";
    buttonSave.addEventListener("click", SaveSong);
    buttonLike.addEventListener("click", LikeSong);
    buttonDelete.addEventListener("click", DeleteSong);
    div.appendChild(buttonSave);
    div.appendChild(buttonLike);
    div.appendChild(buttonDelete);
    collection.appendChild(div);

    for (let i = 0; i < inputFields.length; i++) {
      inputFields[i].value = "";
    }

    function SaveSong() {
      buttonSave.remove();
      buttonLike.remove();
      saved.appendChild(div);
    }

    function LikeSong() {
      let totalLikes = Number(likes.textContent.match(/(\d+)/)[0]) + 1;
      likes.textContent = `Total Likes: ${totalLikes}`;
      buttonLike.disabled = true;
    }

    function DeleteSong() {
      div.remove();
    }
  }
}
