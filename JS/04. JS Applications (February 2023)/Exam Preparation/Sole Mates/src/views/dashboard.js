import { getAllShoes } from "../api/soles.js";
import { html } from "../lib.js";

let dashboardTemplate = (soles) => html`<section id="dashboard">
  <h2>Collectibles</h2>
  ${soles.length > 0
    ? html`<ul class="card-wrapper">
        ${soles.map(soleTemplate)}
      </ul>`
    : html`<h2>There are no items added yet.</h2>`}
</section> `;

let soleTemplate = (sole) => html`<li class="card">
  <img src=${sole.imageUrl} alt="eminem" />
  <p><strong>Brand: </strong><span class="brand">${sole.brand}</span></p>
  <p><strong>Model: </strong><span class="model">${sole.model}</span></p>
  <p><strong>Value:</strong><span class="value">${sole.value}</span>$</p>
  <a class="details-btn" href="/details/${sole._id}">Details</a>
</li>`;

export async function showDashboard(ctx) {
  let shoes = await getAllShoes();
  ctx.render(dashboardTemplate(shoes));
}
