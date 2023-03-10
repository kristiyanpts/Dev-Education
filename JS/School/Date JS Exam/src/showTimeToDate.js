let task4 = document.getElementById("task-4");
document.getElementById("check").addEventListener("click", showDiff);
export function showTimeToDate() {
  task4.style.display = "flex";
  document.querySelector("main").replaceChildren(task4);
}

function showDiff() {
  let date = new Date();
  let otherDate = new Date(document.getElementById("date").value);
  console.log(otherDate);
  let diff = new Date(otherDate.getTime() - date);
  document.querySelector("main").innerHTML = `Days left until ${
    document.getElementById("date").value
  }: ${Math.ceil(diff / (1000 * 60 * 60 * 24))}`;
}
