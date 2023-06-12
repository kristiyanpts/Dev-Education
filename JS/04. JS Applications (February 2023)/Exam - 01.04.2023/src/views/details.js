import { deleteFruitById, getFruitById } from "../api/fruits.js";
import { html } from "../lib.js";
import { getUserData } from "../utils.js";

let detailsTemplate = (fruit, onDelete) => html`<section id="details">
  <div id="details-wrapper">
    <img id="details-img" src=${fruit.imageUrl} alt="example1" />
    <p id="details-title">${fruit.name}</p>
    <div id="info-wrapper">
      <div id="details-description">
        <p>${fruit.description}</p>
        <p id="nutrition">Nutrition</p>
        <p id="details-nutrition">${fruit.nutrition}</p>
      </div>

      ${fruit.canPerformAction
        ? html`<div id="action-buttons">
            <a href="/edit/${fruit._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn"
              >Delete</a
            >
          </div>`
        : null}
    </div>
  </div>
</section>`;

export async function showDetails(ctx) {
  let fruitId = ctx.params.id;
  let user = getUserData();
  let fruit = await getFruitById(fruitId);

  fruit.canPerformAction = user && user._id == fruit._ownerId;
  ctx.render(detailsTemplate(fruit, onDelete));

  async function onDelete() {
    let deleteFruit = confirm("Are you sure you want to delete?");
    if (deleteFruit) {
      await deleteFruitById(fruitId);
      ctx.page.redirect("/dashboard");
    }
  }
}
