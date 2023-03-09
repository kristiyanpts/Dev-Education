import { get } from "./data/api.js";
import { showDetails } from "./details.js";
import { hideSections } from "./utils.js";
let dashboard = document.getElementById("dashboard-holder");
dashboard.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.tagName === "A" && e.target.classList.contains("btn")) {
    let id = e.target.getAttribute("data-id");
    showDetails(id);
  }
});
export function showDashboard() {
  hideSections();
  dashboard.style.display = "flex";
  getIdeas();
}

async function getIdeas() {
  let ideas = await get(
    "/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc"
  );
  if (ideas.length > 0) {
    dashboard.innerHTML = "";
    ideas.forEach((i) => {
      let card = document.createElement("div");
      card.setAttribute("class", "card overflow-hidden current-card details");
      card.setAttribute("style", "width: 20rem; height: 18rem");
      card.innerHTML = `
      <div class="card-body">
          <p class="card-text">${i.title}</p>
        </div>
        <img
          class="card-image"
          src="${i.img}"
          alt="Card image cap"
        />
        <a class="btn" data-id="${i._id}" href="">Details</a>
      `;
      dashboard.appendChild(card);
    });
  } else {
    dashboard.innerHTML = "<h1>No ideas yet! Be the first one :)</h1>";
  }
}
