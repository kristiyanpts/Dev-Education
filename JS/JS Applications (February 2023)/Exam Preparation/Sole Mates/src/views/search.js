import { searchShoes } from "../api/soles.js";
import { html } from "../lib.js";
import { createSubmitHandler, getUserData } from "../utils.js";

let searchTemplate = (soles, onSearch, user) => html`<section id="search">
  <h2>Search by Brand</h2>

  <form @submit=${onSearch} class="search-wrapper cf">
    <input
      id="#search-input"
      type="text"
      name="search"
      placeholder="Search here..."
      required
    />
    <button type="submit">Search</button>
  </form>

  <h3>Results:</h3>

  <div id="search-container">
    ${soles.length > 0
      ? html` <ul class="card-wrapper">
          ${soles.map((e) => soleTemplate(e, user))}
        </ul>`
      : html`<h2>There are no results found.</h2>`}
  </div>
</section>`;

let soleTemplate = (sole, user) => html`<li class="card">
  <img src=${sole.imageUrl} alt="eminem" />
  <p><strong>Brand: </strong><span class="brand">${sole.brand}</span></p>
  <p><strong>Model: </strong><span class="model">${sole.model}</span></p>
  <p><strong>Value:</strong><span class="value">${sole.value}</span>$</p>
  ${user
    ? html`<a class="details-btn" href="/details/${sole._id}">Details</a>`
    : null}
</li>`;

export function showSearch(ctx) {
  let user = getUserData();
  function renderSearch(soles) {
    ctx.render(searchTemplate(soles, createSubmitHandler(onSearch), user));
  }
  renderSearch([]);

  async function onSearch({ search }) {
    let results = await searchShoes(search);
    renderSearch(results);
  }
}
