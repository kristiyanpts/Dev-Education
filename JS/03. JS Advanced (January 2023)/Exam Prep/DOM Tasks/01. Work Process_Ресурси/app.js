function solve() {
  let inputFields = Array.from(document.getElementsByTagName("input"));
  let hireButton = document.getElementById("add-worker");
  let tbody = document.getElementById("tbody");
  let totalSalaryText = document.getElementById("sum");
  let totalSalary = 0;

  hireButton.addEventListener("click", HireEmployee);

  function HireEmployee(e) {
    e.preventDefault();
    let [firstName, lastName, email, dob, position, salary] = inputFields.map(
      (e) => `${e.value}`
    );

    if (
      firstName == "" ||
      lastName == "" ||
      email == "" ||
      dob == "" ||
      position == "" ||
      salary == ""
    ) {
      return;
    }

    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${firstName}</td><td>${lastName}</td><td>${email}</td><td>${dob}</td><td>${position}</td><td>${salary}</td>`;
    let tdButtons = document.createElement("td");
    let buttonFire = document.createElement("button");
    buttonFire.setAttribute("class", "fired");
    buttonFire.textContent = "Fired";
    let buttonEdit = document.createElement("button");
    buttonEdit.setAttribute("class", "edit");
    buttonEdit.textContent = "Edit";
    buttonFire.addEventListener("click", FireEmployee);
    buttonEdit.addEventListener("click", EditEmployee);
    tdButtons.appendChild(buttonFire);
    tdButtons.appendChild(buttonEdit);
    tr.appendChild(tdButtons);
    tbody.appendChild(tr);
    totalSalary += Number(salary);
    totalSalaryText.textContent = totalSalary.toFixed(2);

    for (let i = 0; i < inputFields.length; i++) {
      inputFields[i].value = "";
    }

    function FireEmployee() {
      tr.remove();
      totalSalary -= Number(salary);
      totalSalaryText.textContent = totalSalary.toFixed(2);
    }

    function EditEmployee() {
      let inputInfo = [firstName, lastName, email, dob, position, salary];
      for (let i = 0; i < inputFields.length; i++) {
        inputFields[i].value = inputInfo[i];
      }
      FireEmployee();
    }
  }
}
solve();
