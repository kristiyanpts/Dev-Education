import { showMonths } from "./months.js";
import { hideSections } from "./util.js";

export function showYears() {
  hideSections();

  document.getElementById("years").style.display = "block";

  let years = Array.from(document.querySelectorAll("#years .day"));
  years.forEach((y) =>
    y.addEventListener("click", () => showMonths(y.textContent.trim()))
  );
}
