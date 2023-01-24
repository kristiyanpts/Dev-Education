function attachGradientEvents() {
  let elem = document.getElementById("gradient");
  elem.addEventListener("mousemove", calculatePercentage);
  elem.addEventListener("mouseout", resetText);

  function calculatePercentage(element) {
    document.getElementById("result").innerText =
      Math.trunc((element.offsetX / (element.target.clientWidth - 1)) * 100) +
      "%";
  }

  function resetText() {
    document.getElementById("result").innerText = "";
  }
}
