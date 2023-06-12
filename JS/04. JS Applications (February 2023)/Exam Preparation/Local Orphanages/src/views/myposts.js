import { getUserPosts } from "../api/posts.js";
import { html } from "../lib.js";

let myPostsTemplate = (posts) => html`<section id="my-posts-page">
  <h1 class="title">My Posts</h1>

  ${posts.length > 0
    ? html`<div class="my-posts">${posts.map(postTemplate)}</div>`
    : html`<h1 class="title no-posts-title">You have no posts yet!</h1>`}
</section>`;

let postTemplate = (post) => html`<div class="post">
  <h2 class="post-title">${post.title}</h2>
  <img class="post-image" src=${post.imageUrl} alt="Material Image" />
  <div class="btn-wrapper">
    <a href="/details/${post._id}" class="details-btn btn">Details</a>
  </div>
</div>`;

export async function showMyPosts(ctx) {
  let user = ctx.userData;
  let myPosts = await getUserPosts(user._id);
  ctx.render(myPostsTemplate(myPosts));
}
