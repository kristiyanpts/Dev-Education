window.addEventListener("load", solve);

function solve() {
  let inputFields = Array.from(document.getElementsByTagName("input"));
  let buttonNext = document.getElementById("next-btn");
  let infoTicketList = document.getElementsByClassName("ticket-info-list")[0];
  let confirmTicketList = document.getElementsByClassName("confirm-ticket")[0];
  let body = document.getElementById("body");

  buttonNext.addEventListener("click", NextStep);

  function NextStep(e) {
    e.preventDefault();
    let [firstName, lastName, people, fromDate, days] = inputFields.map(
      (e) => `${e.value}`
    );

    if (
      firstName == "" ||
      lastName == "" ||
      people == "" ||
      fromDate == "" ||
      days == ""
    ) {
      return;
    }

    let li = document.createElement("li");
    li.setAttribute("class", "ticket");
    li.innerHTML = `<article><h3>Name: ${firstName} ${lastName}</h3><p>From date: ${fromDate}</p><p>For ${days} days</p><p>For ${people} people</p></article>`;
    let buttonEdit = document.createElement("button");
    buttonEdit.setAttribute("class", "edit-btn");
    buttonEdit.textContent = "Edit";
    let buttonContinue = document.createElement("button");
    buttonContinue.setAttribute("class", "continue-btn");
    buttonContinue.textContent = "Continue";
    buttonEdit.addEventListener("click", EditTicket);
    buttonContinue.addEventListener("click", ContinueTicket);
    li.appendChild(buttonEdit);
    li.appendChild(buttonContinue);
    infoTicketList.appendChild(li);

    buttonNext.disabled = true;
    for (let i = 0; i < inputFields.length; i++) {
      inputFields[i].value = "";
    }

    function EditTicket() {
      buttonNext.disabled = false;
      let inputFieldsValues = [firstName, lastName, people, fromDate, days];
      for (let i = 0; i < inputFields.length; i++) {
        inputFields[i].value = inputFieldsValues[i];
      }
      li.remove();
    }
    function ContinueTicket() {
      li.remove();
      buttonEdit.setAttribute("class", "confirm-btn");
      buttonEdit.textContent = "Confirm";
      buttonContinue.setAttribute("class", "cancel-btn");
      buttonContinue.textContent = "Cancel";
      buttonEdit.removeEventListener("click", EditTicket);
      buttonContinue.removeEventListener("click", ContinueTicket);
      buttonEdit.addEventListener("click", ConfirmTicket);
      buttonContinue.addEventListener("click", CancelTicket);
      confirmTicketList.appendChild(li);
    }

    function ConfirmTicket() {
      body.innerHTML = `<h1 id = "thank-you">Thank you, have a nice day!</h1>`;
      let buttonBack = document.createElement("button");
      buttonBack.setAttribute("id", "back-btn");
      buttonBack.textContent = "Back";
      buttonBack.addEventListener("click", () => {
        document.location.reload(true);
      });
      body.appendChild(buttonBack);
    }
    function CancelTicket() {
      li.remove();
      buttonNext.disabled = false;
    }
  }
}
