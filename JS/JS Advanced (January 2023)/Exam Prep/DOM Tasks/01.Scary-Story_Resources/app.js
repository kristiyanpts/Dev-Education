window.addEventListener("load", solve);

function solve() {
  let inputFields = Array.from(document.getElementsByTagName("input"));
  let genre = document.getElementById("genre");
  let story = document.getElementById("story");
  let list = document.getElementById("preview-list");
  let publishButton = document.getElementById("form-btn");
  let main = document.getElementById("main");

  publishButton.addEventListener("click", PublishStory);

  function PublishStory(e) {
    e.preventDefault();
    let [firstName, lastName, age, storyTitle] = inputFields.map(
      (e) => `${e.value}`
    );
    let storyText = story.value;
    let genreIndex = genre.selectedIndex;

    if (
      firstName == "" ||
      lastName == "" ||
      age == "" ||
      storyTitle == "" ||
      genre.options[genre.selectedIndex].text == "" ||
      story.value == ""
    ) {
      return;
    }

    let li = document.createElement("li");
    li.setAttribute("class", "story-info");
    li.innerHTML = `<article><h4>Name: ${firstName} ${lastName}</h4><p>Age: ${age}</p><p>Title: ${storyTitle}</p><p>Genre: ${
      genre.options[genre.selectedIndex].text
    }</p><p>${story.value}</p></article>`;

    let saveButton = document.createElement("button");
    saveButton.setAttribute("class", "save-btn");
    saveButton.textContent = "Save";
    let editButton = document.createElement("button");
    editButton.setAttribute("class", "edit-btn");
    editButton.textContent = "Edit";
    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "delete-btn");
    deleteButton.textContent = "Delete";

    saveButton.addEventListener("click", SaveStory);
    editButton.addEventListener("click", EditStory);
    deleteButton.addEventListener("click", DeleteStory);

    li.appendChild(saveButton);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    list.appendChild(li);

    for (let i = 0; i < inputFields.length; i++) {
      inputFields[i].value = "";
    }
    story.value = "";
    genre.selectedIndex = -1;

    publishButton.disabled = true;

    function SaveStory() {
      main.innerHTML = "<h1>Your scary story is saved!</h1>";
    }

    function EditStory() {
      let inputInfo = [firstName, lastName, age, storyTitle];
      for (let i = 0; i < inputFields.length; i++) {
        inputFields[i].value = inputInfo[i];
      }
      story.value = storyText;
      genre.selectedIndex = genreIndex;
      li.remove();
      publishButton.disabled = false;
    }

    function DeleteStory() {
      li.remove();
      publishButton.disabled = false;
    }
  }
}
