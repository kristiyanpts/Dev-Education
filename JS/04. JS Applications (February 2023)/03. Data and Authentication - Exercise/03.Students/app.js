let form = document.getElementById("form");
let notification = document.getElementsByClassName("notification")[0];
let tbody = document.querySelector("tbody");
const url = "http://localhost:3030/jsonstore/collections/students";
form.addEventListener("submit", SubmitStudent);
window.onload = (event) => {
  GetAllStudents();
};

async function SubmitStudent(event) {
  event.preventDefault();
  let formData = new FormData(event.target);
  let { firstName, lastName, facultyNumber, grade } = Object.fromEntries(
    formData.entries()
  );
  if (
    firstName === "" ||
    lastName === "" ||
    facultyNumber === "" ||
    grade === ""
  ) {
    return;
  }

  let data = { firstName, lastName, facultyNumber, grade };
  let response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  GetAllStudents();
}

async function GetAllStudents() {
  let response = await fetch(url);
  let data = await response.json();
  tbody.innerHTML = "";

  for (const [studentId, student] of Object.entries(data)) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.textContent = student.firstName;
    let td2 = document.createElement("td");
    td2.textContent = student.lastName;
    let td3 = document.createElement("td");
    td3.textContent = student.facultyNumber;
    let td4 = document.createElement("td");
    td4.textContent = student.grade;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tbody.appendChild(tr);
  }
}
