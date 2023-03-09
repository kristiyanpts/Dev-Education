import { showDashboard } from "./dashboard.js";
import { post } from "./data/api.js";
import { hideSections } from "./utils.js";

export function showCreate() {
  hideSections();
  document.getElementById("page-create").style.display = "block";
  let form = document.querySelector("#page-create form");
  form.addEventListener("submit", createIdea);
}

async function createIdea(e) {
  e.preventDefault();
  let formData = new FormData(e.target);
  let { title, description, imageURL } = Object.fromEntries(formData.entries());
  if (title.length < 6 || description.length < 10 || imageURL.length < 5) {
    alert("Please fill in the fields correctly");
    return;
  }
  let idea = { title, description, img: imageURL };
  let data = await post("/data/ideas", idea);
  showDashboard();
}
