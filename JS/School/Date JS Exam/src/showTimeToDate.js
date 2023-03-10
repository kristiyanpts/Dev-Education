export function showTimeToDate() {
  let date = new Date();
  let otherDate = new Date("2023-03-24T00:00:00");
  let diff = new Date(otherDate.getTime() - date);
  console.log(diff / (1000 * 60 * 60 * 24));
  document.querySelector(
    "main"
  ).innerHTML = `Days left until 24-03-2023: ${Math.floor(
    diff / (1000 * 60 * 60 * 24)
  )}`;
}
