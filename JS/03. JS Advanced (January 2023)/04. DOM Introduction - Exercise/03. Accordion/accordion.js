function toggle() {
  let toggleCase = document.getElementsByClassName("button")[0];
  let extra = document.getElementById("extra");

  if (extra.style.display === "block") {
    toggleCase.textContent = "More";
    extra.style.display = "none";
  } else {
    toggleCase.textContent = "Less";
    extra.style.display = "block";
  }
}
