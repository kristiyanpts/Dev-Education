function attachEventsListeners() {
  let daysBtn = document.getElementById("daysBtn");
  let hrsBtn = document.getElementById("hoursBtn");
  let minsBtn = document.getElementById("minutesBtn");
  let secsBtn = document.getElementById("secondsBtn");

  daysBtn.addEventListener("click", () => {
    ConvertTime(daysBtn.parentElement.children[1].value, "day");
  });
  hrsBtn.addEventListener("click", () => {
    ConvertTime(hrsBtn.parentElement.children[1].value, "hour");
  });
  minsBtn.addEventListener("click", () => {
    ConvertTime(minsBtn.parentElement.children[1].value, "min");
  });
  secsBtn.addEventListener("click", () => {
    ConvertTime(secsBtn.parentElement.children[1].value, "sec");
  });

  function ConvertTime(time, timeType) {
    let days, hours, minutes, seconds;
    switch (timeType) {
      case "day":
        days = time;
        hours = days * 24;
        minutes = hours * 60;
        seconds = minutes * 60;
        break;
      case "hour":
        hours = time;
        days = time / 24;
        minutes = hours * 60;
        seconds = minutes * 60;
        break;
      case "min":
        minutes = time;
        hours = minutes / 60;
        days = hours / 24;
        seconds = minutes * 60;
        break;
      case "sec":
        seconds = time;
        minutes = seconds / 60;
        hours = minutes / 60;
        days = hours / 24;
        break;
      default:
        break;
    }

    document.getElementById("days").value = days;
    document.getElementById("hours").value = hours;
    document.getElementById("minutes").value = minutes;
    document.getElementById("seconds").value = seconds;
  }
}
