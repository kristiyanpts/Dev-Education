import { showClock } from "./src/showClock.js";
import { showCurrentDate } from "./src/showCurrentDate.js";
import { showCurrentTime } from "./src/showCurrentTime.js";
import { showGreeting } from "./src/showGreeting.js";
import { showTimeToDate } from "./src/showTimeToDate.js";

let tasks = {
  1: showCurrentDate,
  2: showCurrentTime,
  3: showGreeting,
  4: showTimeToDate,
  5: showClock,
};

document.querySelector(".tasks").addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    let id = e.target.getAttribute("data-id");
    tasks[id]();
    document
      .querySelectorAll("button")
      .forEach((b) => b.classList.remove("selected"));
    e.target.classList.add("selected");
  }
});
