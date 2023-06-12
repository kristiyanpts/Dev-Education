function solve() {
  let buttonAdd = document.getElementById("add");
  let orangeSection = document.querySelectorAll("section div")[3];
  let yellowSection = document.querySelectorAll("section div")[5];
  let greenSection = document.querySelectorAll("section div")[7];
  let task = document.getElementById("task");
  let description = document.getElementById("description");
  let date = document.getElementById("date");
  buttonAdd.addEventListener("click", AddTask);

  function AddTask(e) {
    e.preventDefault();
    if (task.value == "" || description.value == "" || date.value == "") {
      return;
    }

    let article = document.createElement("article");
    article.innerHTML = `
    <h3>${task.value}</h3>
    <p>Description: ${description.value}</p>
    <p>Due Date: ${date.value}</p>
    `;
    let flex = document.createElement("div");
    flex.setAttribute("class", "flex");
    let buttonStart = document.createElement("button");
    buttonStart.setAttribute("class", "green");
    buttonStart.textContent = "Start";
    let buttonDelete = document.createElement("button");
    buttonDelete.setAttribute("class", "red");
    buttonDelete.textContent = "Delete";
    buttonStart.addEventListener("click", StartTask);
    buttonDelete.addEventListener("click", DeleteTask);
    flex.appendChild(buttonStart);
    flex.appendChild(buttonDelete);
    article.appendChild(flex);
    orangeSection.appendChild(article);

    function StartTask() {
      buttonStart.setAttribute("class", "red");
      buttonStart.textContent = "Delete";
      buttonDelete.setAttribute("class", "orange");
      buttonDelete.textContent = "Finish";
      buttonStart.removeEventListener("click", StartTask);
      buttonDelete.removeEventListener("click", DeleteTask);
      buttonStart.addEventListener("click", DeleteTask);
      buttonDelete.addEventListener("click", FinishTask);
      yellowSection.appendChild(article);
    }

    function DeleteTask() {
      article.remove();
    }

    function FinishTask() {
      flex.remove();
      greenSection.appendChild(article);
    }
  }
}
