window.addEventListener("load", solve);

function solve() {
  let inputFields = Array.from(document.getElementsByTagName("input"));
  let gender = document.getElementById("genderSelect");
  let description = document.getElementById("task");
  let listProgress = document.getElementById("in-progress");
  let listFinished = document.getElementById("finished");
  let buttonSubmit = document.getElementById("form-btn");
  let buttonClear = document.getElementById("clear-btn");
  let count = document.getElementById("progress-count");

  buttonSubmit.addEventListener("click", SubmitTask);

  function SubmitTask(e) {
    e.preventDefault();
    let [firstName, lastName, age] = inputFields.map((e) => `${e.value}`);
    let descText = description.value;
    let selectedGender = gender.selectedIndex;

    if (
      firstName == "" ||
      lastName == "" ||
      age == "" ||
      gender.options[gender.selectedIndex].text == "" ||
      description.value == ""
    ) {
      return;
    }

    let li = document.createElement("li");
    li.setAttribute("class", "each-line");
    li.innerHTML = `<article><h4>${firstName} ${lastName}</h4><p>${
      gender.options[gender.selectedIndex].text
    }, ${age}</p><p>Dish description: ${description.value}</p></article>`;
    let buttonEdit = document.createElement("button");
    buttonEdit.setAttribute("class", "edit-btn");
    buttonEdit.textContent = "Edit";
    let buttonComplete = document.createElement("button");
    buttonComplete.setAttribute("class", "complete-btn");
    buttonComplete.textContent = "Mark as complete";

    buttonEdit.addEventListener("click", EditTask);
    buttonComplete.addEventListener("click", CompleteTask);

    li.appendChild(buttonEdit);
    li.appendChild(buttonComplete);

    listProgress.appendChild(li);

    for (let i = 0; i < inputFields.length; i++) {
      inputFields[i].value = "";
    }
    description.value = "";
    gender.selectedIndex = -1;

    buttonSubmit.disabled = true;

    count.textContent = Number(count.textContent) + 1;

    function EditTask() {
      let inputInfo = [firstName, lastName, age];
      for (let i = 0; i < inputFields.length; i++) {
        inputFields[i].value = inputInfo[i];
      }
      description.value = descText;
      gender.selectedIndex = selectedGender;

      li.remove();

      buttonSubmit.disabled = false;

      count.textContent = Number(count.textContent) - 1;
    }

    function CompleteTask() {
      buttonEdit.remove();
      buttonComplete.remove();
      listFinished.appendChild(li);

      buttonSubmit.disabled = false;

      count.textContent = Number(count.textContent) - 1;
    }

    buttonClear.addEventListener("click", ClearTasks);

    function ClearTasks() {
      listFinished.innerHTML = "";
    }
  }
}
