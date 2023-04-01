import { getAllFruits } from "../api/fruits.js";
import { html } from "../lib.js";

let dashboardTemplate = (fruits) => html`<h2>Fruits</h2>
  ${fruits.length > 0
    ? html`<section id="dashboard">${fruits.map(fruitTemplate)}</section>`
    : html`<h2>No fruit info yet.</h2>`} `;

let fruitTemplate = (fruit) => html`<div class="fruit">
  <img src=${fruit.imageUrl} alt="example1" />
  <h3 class="title">${fruit.name}</h3>
  <p class="description">${fruit.description}</p>
  <a class="details-btn" href="/details/${fruit._id}">More Info</a>
</div>`;

export async function showDashboard(ctx) {
  let friuts = await getAllFruits();
  console.log(friuts);
  ctx.render(dashboardTemplate(friuts));
}
