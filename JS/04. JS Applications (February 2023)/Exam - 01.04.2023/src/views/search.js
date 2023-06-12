import { searchFruit } from "../api/fruits.js";
import { html } from "../lib.js";
import { createSubmitHandler, getUserData } from "../utils.js";

let searchTemplate = (fruits, onSearch) => html`<section id="search">
  <div class="form">
    <h2>Search</h2>
    <form @submit=${onSearch} class="search-form">
      <input type="text" name="search" id="search-input" />
      <button class="button-list">Search</button>
    </form>
  </div>
  <h4>Results:</h4>
  ${fruits.length > 0
    ? html`<div class="search-result">${fruits.map(fruitTemplate)}</div>`
    : html`<p class="no-result">No result.</p>`}
</section>`;

let fruitTemplate = (fruit) => html`<div class="fruit">
  <img src=${fruit.imageUrl} alt="example1" />
  <h3 class="title">${fruit.name}</h3>
  <p>${fruit.description}</p>
  <a class="details-btn" href="/details/${fruit._id}">More Info</a>
</div>`;

export function showSearch(ctx) {
  function renderSearch(fruits) {
    ctx.render(searchTemplate(fruits, createSubmitHandler(onSearch)));
  }
  renderSearch([]);

  async function onSearch({ search }) {
    if (search == "") return alert("Please fill in the search.");
    let results = await searchFruit(search);
    renderSearch(results);
  }
}
