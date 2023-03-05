import { showMonth } from "./month.js";
import { hideSections } from "./util.js";
import { showYears } from "./years.js";

export function showMonths(year) {
  hideSections();

  let monthSection = document.getElementById("year-" + year);
  monthSection.style.display = "block";
  monthSection
    .getElementsByTagName("caption")[0]
    .addEventListener("click", showYears);

  let months = Array.from(document.querySelectorAll("#year-" + year + " .day"));
  months.forEach((m) =>
    m.addEventListener("click", () => showMonth(year, m.textContent.trim()))
  );
}
