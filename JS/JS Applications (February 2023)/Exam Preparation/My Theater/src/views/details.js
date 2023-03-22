import {
  deleteTheaterById,
  getTheaterById,
  getTheaterLikesById,
  getUserTheaterLikesById,
  likeTheater,
} from "../api/theaters.js";
import { html } from "../lib.js";
import { getUserData } from "../utils.js";

let detailsTemplate = (theater, onDelete, onLike) => html`<section
  id="detailsPage"
>
  <div id="detailsBox">
    <div class="detailsInfo">
      <h1>Title: ${theater.title}</h1>
      <div>
        <img src=${theater.imageUrl} />
      </div>
    </div>

    <div class="details">
      <h3>Theater Description</h3>
      <p>${theater.description}</p>
      <h4>Date: ${theater.date}</h4>
      <h4>Author: ${theater.author}</h4>
      ${theater.canPerformAction || theater.canLike
        ? html`<div class="buttons">
            ${theater.canPerformAction
              ? html`<a
                    class="btn-delete"
                    @click=${onDelete}
                    href="javascript:void(0)"
                    >Delete</a
                  >
                  <a class="btn-edit" href="/edit/${theater._id}">Edit</a>`
              : null}
            ${theater.canLike
              ? html`<a
                  class="btn-like"
                  @click=${onLike}
                  href="javascript:void(0)"
                  >Like</a
                >`
              : null}
          </div>`
        : null}

      <p class="likes">Likes: ${theater.totalLikes}</p>
    </div>
  </div>
</section>`;

export async function showDetails(ctx) {
  let theaterId = ctx.params.id;
  let user = getUserData();
  let theater = await getTheaterById(theaterId);
  let totalLikes = await getTheaterLikesById(theaterId);
  let userLike = await getUserTheaterLikesById(theaterId, user._id);

  theater.canPerformAction = user && user._id == theater._ownerId;
  theater.canLike = user && !theater.canPerformAction && userLike == 0;
  theater.totalLikes = totalLikes;
  ctx.render(detailsTemplate(theater, onDelete, onLike));

  async function onDelete() {
    await deleteTheaterById(theaterId);
    ctx.page.redirect("/myprofile");
  }

  async function onLike() {
    likeTheater(theaterId);
    ctx.page.redirect("/details/" + theaterId);
  }
}
