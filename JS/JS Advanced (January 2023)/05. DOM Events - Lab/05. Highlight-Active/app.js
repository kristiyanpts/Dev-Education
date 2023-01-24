function focused() {
  let inputs = Array.from(document.querySelectorAll("input"));

  for (const input of inputs) {
    input.addEventListener("focus", (event) => {
      event.target.parentElement.classList.add("focused");
    });
    input.addEventListener("blur", (event) => {
      event.target.parentElement.classList.remove("focused");
    });
  }
}
