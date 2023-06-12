function lockedProfile() {
  let buttons = document.getElementsByTagName("button");

  for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.addEventListener("click", (event) => {
      let lockRadio = button.parentElement.querySelector("input[value='lock']");
      if (lockRadio.checked === false) {
        let hiddenFiles = button.parentElement.getElementsByTagName(`div`)[0];
        if (button.textContent === "Show more") {
          hiddenFiles.style.display = "inline-block";
          button.textContent = "Hide it";
        } else {
          hiddenFiles.style.display = "none";
          button.textContent = "Show more";
        }
      }
    });
  }
}
