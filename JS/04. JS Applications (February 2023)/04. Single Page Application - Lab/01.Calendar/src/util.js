export function hideSections() {
  let sections = Array.from(document.getElementsByTagName("section"));
  sections.forEach((s) => (s.style.display = "none"));
}

export function monthNameToNum(month) {
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  return months.indexOf(month) + 1;
}
