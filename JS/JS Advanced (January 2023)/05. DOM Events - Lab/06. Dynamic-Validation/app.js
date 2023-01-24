function validate() {
  let email = document.getElementById("email");
  let regex = /([a-z0-9]+)@([a-z]+).([a-z]+)/g;
  email.addEventListener("change", (event) => {
    if (regex.exec(event.target.value) !== null) {
      event.target.classList.remove("error");
    } else {
      event.target.classList.add("error");
    }
  });
}
