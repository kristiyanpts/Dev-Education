import { showDashboard } from "./dashboard.js";
import { del, get } from "./data/api.js";
import { hideSections } from "./utils.js";
let details = document.getElementById("page-details");
details.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.tagName === "A" && e.target.classList.contains("btn")) {
    let id = e.target.getAttribute("data-id");
    deleteIdea(id);
  }
});
export function showDetails(id) {
  hideSections();
  document.querySelector("main").replaceChildren(details);
  loadDetails(id);
}

async function loadDetails(id) {
  let data = await get(`/data/ideas/${id}`);
  let userData = JSON.parse(localStorage.getItem("userData"));
  details.innerHTML = `
    <img class="det-img" src="${data.img}" />
    <div class="desc">
    <h2 class="display-5">${data.title}</h2>
    <p class="infoType">Description:</p>
    <p class="idea-description">${data.description}</p>
    </div>
  `;
  if (data._ownerId == userData.id) {
    details.innerHTML += `
    <div class="text-center">
    <a class="btn detb" data-id="${id}" href="">Delete</a>
    </div>
    `;
  }
}

async function deleteIdea(id) {
  await del(`/data/ideas/${id}`);
  showDashboard();
}
