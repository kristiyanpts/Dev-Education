export function showCurrentDate() {
  let date = new Date();
  let daysOfTheWeek = [
    "Нед.",
    "Пон.",
    "Втр.",
    "Сряда",
    "Четв.",
    "Петък",
    "Съб.",
  ];
  document.querySelector("main").innerHTML = `Current Date: ${
    date.getDay() + 1
  }.${date.getMonth()}.${date.getFullYear()} - ${daysOfTheWeek[date.getDay()]}`;
}
