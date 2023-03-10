export function showGreeting() {
  let date = new Date();
  let greet = "";
  if (date.getHours() <= 10) {
    greet = "Добро утро!";
  } else if (date.getHours() <= 18) {
    greet = "Добър ден!";
  } else {
    greet = "Добър вечер!";
  }
  document.querySelector("main").innerHTML = greet;
}
