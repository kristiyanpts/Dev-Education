function validate() {
  let buttonSubmit = document.getElementById("submit");
  let checkbox = document.getElementById("company");
  let inputFields = Array.from(document.getElementsByTagName("input"));
  let companyInfo = document.getElementById("companyInfo");
  let companyInfoShown = false;
  let valid = document.getElementById("valid");

  checkbox.addEventListener("change", () => {
    if (companyInfoShown === false) {
      companyInfoShown = true;
      companyInfo.style.display = "block";
    } else {
      companyInfoShown = false;
      companyInfo.style.display = "none";
    }
  });

  buttonSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    let [username, email, password, confirmPassword, isCompany, companyNumber] =
      inputFields.map((e) => e.value);
    let isEverythingValid = true;

    if (username.match(/^[A-Za-z0-9]{3,20}$/) === null) {
      inputFields[0].style.borderColor = "red";
      isEverythingValid = false;
    } else {
      inputFields[0].style.border = "none";
    }

    console.log(password, confirmPassword);
    if (
      password.match(/^[\w]{5,15}$/) === null ||
      confirmPassword.match(/^[\w]{5,15}$/) === null ||
      password != confirmPassword
    ) {
      inputFields[2].style.borderColor = "red";
      isEverythingValid = false;
      inputFields[3].style.borderColor = "red";
    } else {
      inputFields[2].style.border = "none";
      inputFields[3].style.border = "none";
    }

    if (email.match(/^[^@.]+@[^@]*\.[^@]*$/) === null) {
      isEverythingValid = false;
      inputFields[1].style.borderColor = "red";
    } else {
      inputFields[1].style.border = "none";
    }

    if (companyInfoShown) {
      if (companyNumber < 1000 || companyNumber > 9999) {
        isEverythingValid = false;
        inputFields[5].style.borderColor = "red";
      } else {
        inputFields[5].style.border = "none";
      }
    }

    if (isEverythingValid) {
      valid.style.display = "block";
    } else {
      valid.style.display = "none";
    }
  });
}
