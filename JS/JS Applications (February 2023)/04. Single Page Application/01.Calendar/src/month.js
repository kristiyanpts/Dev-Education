import { showMonths } from "./months.js";
import { hideSections, monthNameToNum } from "./util.js";

export function showMonth(year, month) {
  hideSections();
  let monthIndex = monthNameToNum(month);

  let daysSection = document.getElementById(`month-${year}-${monthIndex}`);
  daysSection.style.display = "block";
  daysSection
    .getElementsByTagName("caption")[0]
    .addEventListener("click", () => showMonths(year));
}
