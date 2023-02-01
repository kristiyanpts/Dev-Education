window.addEventListener("load", solve);

function solve() {
  let nextButton = document.getElementById("next-btn");
  let inputFields = Array.from(document.getElementsByTagName("input"));
  nextButton.addEventListener("click", ReservationInfo);

  function ReservationInfo(e) {
    e.preventDefault();
    let [firstName, lastName, checkIn, checkOut, numOfGuests] = inputFields.map(
      (e) => `${e.value}`
    );
    if (
      firstName == "" ||
      lastName == "" ||
      checkIn == "" ||
      checkOut == "" ||
      numOfGuests == "" ||
      new Date(checkIn) >= new Date(checkOut)
    ) {
      return;
    }

    let list = document.getElementsByClassName("info-list")[0];
    let confirmList = document.getElementsByClassName("confirm-list")[0];
    let verification = document.getElementById("verification");

    let li = document.createElement("li");
    li.setAttribute("class", "reservation-content");
    li.innerHTML = `<article><h3>Name: ${firstName} ${lastName}</h3><p>From date: ${checkIn}</p><p>To date: ${checkOut}</p><p>For ${numOfGuests} people</p></article>`;

    let buttonEdit = document.createElement("button");
    buttonEdit.setAttribute("class", "edit-btn");
    buttonEdit.textContent = "Edit";
    buttonEdit.addEventListener("click", EditReservation);

    let buttonContinue = document.createElement("button");
    buttonContinue.setAttribute("class", "continue-btn");
    buttonContinue.textContent = "Continue";
    buttonContinue.addEventListener("click", ContinueReservation);

    li.appendChild(buttonEdit);
    li.appendChild(buttonContinue);

    list.appendChild(li);

    nextButton.disabled = true;

    function EditReservation() {
      let inputInfo = [firstName, lastName, checkIn, checkOut, numOfGuests];
      for (let i = 0; i < inputFields.length; i++) {
        inputFields[i].value = inputInfo[i];
      }
      li.remove();
      nextButton.disabled = false;
    }

    function ContinueReservation() {
      buttonEdit.setAttribute("class", "confirm-btn");
      buttonEdit.textContent = "Confirm";
      buttonEdit.removeEventListener("click", EditReservation);
      buttonEdit.addEventListener("click", ConfirmReservation);

      buttonContinue.setAttribute("class", "cancel-btn");
      buttonContinue.textContent = "Cancel";
      buttonContinue.removeEventListener("click", ContinueReservation);
      buttonContinue.addEventListener("click", CancelReservation);

      confirmList.appendChild(li);
    }

    function ConfirmReservation() {
      li.remove();

      verification.setAttribute("class", "reservation-confirmed");
      verification.textContent = "Confirmed.";

      nextButton.disabled = false;
    }

    function CancelReservation() {
      li.remove();

      verification.setAttribute("class", "reservation-cancelled");
      verification.textContent = "Cancelled.";

      nextButton.disabled = false;
    }
  }
}
