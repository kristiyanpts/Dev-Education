window.addEventListener('load', solution);

function solution() {
  let inputFields = Array.from(document.getElementsByTagName("input"));
  let buttonSubmit = document.getElementById("submitBTN");
  let buttonEdit = document.getElementById("editBTN");
  let buttonContinue = document.getElementById("continueBTN");
  let previewList = document.getElementById("infoPreview");
  let main = document.getElementById("block");

  buttonSubmit.addEventListener("click", SubmitReservation);

  function SubmitReservation(e) {
    e.preventDefault();
    let [name, email, number, address, postalCode] = inputFields.map((e) => `${e.value}`);

    if (name == "" || email == "") {
      return;
    }

    previewList.innerHTML = `<li>Full Name: ${name}</li><li>Email: ${email}</li><li>Phone Number: ${number}</li><li>Address: ${address}</li><li>Postal Code: ${postalCode}</li>`;
    buttonSubmit.disabled = true;
    buttonEdit.disabled = false;
    buttonContinue.disabled = false;

    for (let i = 0; i < inputFields.length; i++) {
      inputFields[i].value = "";
    }

    buttonEdit.addEventListener("click", EditReservation);
    buttonContinue.addEventListener("click", ContinueReservation);

    function EditReservation() {
      previewList.innerHTML = "";
      let inputInfo = [name, email, number, address, postalCode];
      for (let i = 0; i < inputFields.length; i++) {
        inputFields[i].value = inputInfo[i];
      }
      buttonSubmit.disabled = false;
      buttonEdit.disabled = true;
      buttonContinue.disabled = true;
    }

    function ContinueReservation() {
      main.innerHTML = "<h3>Thank you for your reservation!</h3>";
    }
  }
}
