export function showCurrentTime() {
  let date = new Date();
  document.querySelector(
    "main"
  ).innerHTML = `Current Time: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
