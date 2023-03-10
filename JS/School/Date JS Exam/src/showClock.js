export function showClock() {
  let date = new Date();
  document.querySelector(
    "main"
  ).innnerHTML = `Current Time: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

setInterval(showClock, 1000);
