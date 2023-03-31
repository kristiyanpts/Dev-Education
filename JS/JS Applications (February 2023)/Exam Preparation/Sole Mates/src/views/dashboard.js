import { getAllShoes } from "../api/soles.js";
import { html } from "../lib.js";
import { getUserData } from "../utils.js";

let dashboardTemplate = (soles, user) => html`<section id="dashboard">
  <h2>Collectibles</h2>
  ${soles.length > 0
    ? html`<ul class="card-wrapper">
        ${soles.map((e) => soleTemplate(e, user))}
      </ul>`
    : html`<h2>There are no items added yet.</h2>`}
</section> `;

let soleTemplate = (sole, user) => html`<li class="card">
  <img src=${sole.imageUrl} alt="eminem" />
  <p><strong>Brand: </strong><span class="brand">${sole.brand}</span></p>
  <p><strong>Model: </strong><span class="model">${sole.model}</span></p>
  <p><strong>Value:</strong><span class="value">${sole.value}</span>$</p>
  ${user
    ? html`<a class="details-btn" href="/details/${sole._id}">Details</a>`
    : null}
</li>`;

export async function showDashboard(ctx) {
  let shoes = await getAllShoes();
  let user = getUserData();
  ctx.render(dashboardTemplate(shoes, user));
}
