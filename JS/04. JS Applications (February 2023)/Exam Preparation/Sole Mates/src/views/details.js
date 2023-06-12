import { deleteShoesById, getShoesById } from "../api/soles.js";
import { html } from "../lib.js";
import { getUserData } from "../utils.js";

let detailsTemplate = (shoes, onDelete) => html`<section id="details">
  <div id="details-wrapper">
    <p id="details-title">Shoe Details</p>
    <div id="img-wrapper">
      <img src=${shoes.imageUrl} alt="example1" />
    </div>
    <div id="info-wrapper">
      <p>Brand: <span id="details-brand">${shoes.brand}</span></p>
      <p>Model: <span id="details-model">${shoes.model}</span></p>
      <p>Release date: <span id="details-release">${shoes.release}</span></p>
      <p>Designer: <span id="details-designer">${shoes.designer}</span></p>
      <p>Value: <span id="details-value">${shoes.value}</span></p>
    </div>

    ${shoes.canPerformAction
      ? html`<div id="action-buttons">
          <a href="/edit/${shoes._id}" id="edit-btn">Edit</a>
          <a @click=${onDelete} href="javascript:void(0)" id="delete-btn"
            >Delete</a
          >
        </div>`
      : null}
  </div>
</section>`;

export async function showDetails(ctx) {
  let shoesId = ctx.params.id;
  let user = getUserData();
  let shoes = await getShoesById(shoesId);

  shoes.canPerformAction = user && user._id == shoes._ownerId;
  ctx.render(detailsTemplate(shoes, onDelete));

  async function onDelete() {
    let deletePost = confirm("Are you sure you want to delete?");
    if (deletePost) {
      await deleteShoesById(shoesId);
      ctx.page.redirect("/dashboard");
    }
  }
}
