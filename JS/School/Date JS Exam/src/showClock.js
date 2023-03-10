let task5 = document.getElementById("task-5");
export function showClock() {
  task5.style.display = "block";
  document.querySelector("main").replaceChildren(task5);
}

startClock();

function startClock() {
  let date = new Date();
  task5.innerHTML = `Current Time: ${
    date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
  }:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}:${
    date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()
  }`;
}

setInterval(startClock, 1000);
