import {
  deletePostById,
  getPostById,
  getPostDonation,
  getUserPostDonation,
  makeDonation,
} from "../api/posts.js";
import { html } from "../lib.js";
import { getUserData } from "../utils.js";

let detailsTemplate = (post, onDelete, onDonate) => html`<section
  id="details-page"
>
  <h1 class="title">Post Details</h1>

  <div id="container">
    <div id="details">
      <div class="image-wrapper">
        <img src=${post.imageUrl} alt="Material Image" class="post-image" />
      </div>
      <div class="info">
        <h2 class="title post-title">${post.title}</h2>
        <p class="post-description">Description: ${post.description}</p>
        <p class="post-address">Address: ${post.address}</p>
        <p class="post-number">Phone number: ${post.phone}</p>
        <p class="donate-Item">Donate Materials: ${post.totalDonations}</p>

        ${post.canPerformAction || post.canDonate
          ? html`<div class="btns">
              ${post.canPerformAction
                ? html`<a href="/edit/${post._id}" class="edit-btn btn">Edit</a>
                    <a
                      @click=${onDelete}
                      href="javascript:void(0)"
                      class="delete-btn btn"
                      >Delete</a
                    >`
                : null}
              ${post.canDonate
                ? html`<a
                    @click=${onDonate}
                    href="javascript:void(0)"
                    class="donate-btn btn"
                    >Donate</a
                  >`
                : null}
            </div>`
          : null}
      </div>
    </div>
  </div>
</section>`;

export async function showDetails(ctx) {
  let postId = ctx.params.id;
  let user = getUserData();
  let postDonations = await getPostDonation(postId);
  let userDonation = await getUserPostDonation(postId, user._id);
  let post = await getPostById(postId);

  post.canPerformAction = user && user._id == post._ownerId;
  post.canDonate = user && !post.canPerformAction && userDonation == 0;
  post.totalDonations = postDonations;
  ctx.render(detailsTemplate(post, onDelete, onDonate));

  async function onDelete() {
    let deletePost = confirm("Are you sure you want to delete?");
    if (deletePost) {
      await deletePostById(postId);
      ctx.page.redirect("/");
    }
  }

  async function onDonate() {
    await makeDonation(postId);
    ctx.page.redirect("/details/" + postId);
  }
}
