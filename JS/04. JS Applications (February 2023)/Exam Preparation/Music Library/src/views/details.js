import {
  deleteAlbumById,
  getAlbumById,
  getAlbumLikes,
  getUserAlbumLikes,
  likeAlbum,
} from "../api/music.js";
import { html } from "../lib.js";
import { getUserData } from "../utils.js";

let detailsTemplate = (album, onDelete, onLike) => html`<section id="details">
  <div id="details-wrapper">
    <p id="details-title">Album Details</p>
    <div id="img-wrapper">
      <img src=${album.imageUrl} alt="example1" />
    </div>
    <div id="info-wrapper">
      <p>
        <strong>Band:</strong><span id="details-singer">${album.singer}</span>
      </p>
      <p>
        <strong>Album name:</strong
        ><span id="details-album">${album.album}</span>
      </p>
      <p>
        <strong>Release date:</strong
        ><span id="details-release">${album.release}</span>
      </p>
      <p>
        <strong>Label:</strong><span id="details-label">${album.label}</span>
      </p>
      <p>
        <strong>Sales:</strong><span id="details-sales">${album.sales}</span>
      </p>
    </div>
    <div id="likes">
      Likes: <span id="likes-count">${album.totalLikes}</span>
    </div>

    ${album.canPerformAction || album.canLike
      ? html`<div id="action-buttons">
          ${album.canPerformAction
            ? html` <a
                  @click=${onDelete}
                  href="javascript:void(0)"
                  id="delete-btn"
                  >Delete</a
                >
                <a href="/edit/${album._id}" id="edit-btn">Edit</a>`
            : null}
          ${album.canLike
            ? html`<a @click=${onLike} href="javascript:void(0)" id="like-btn"
                >Like</a
              >`
            : null}
        </div>`
      : null}
  </div>
</section>`;

export async function showDetails(ctx) {
  let albumId = ctx.params.id;
  let user = getUserData();
  let album = await getAlbumById(albumId);
  let totalLikes = await getAlbumLikes(albumId);
  let userLike = await getUserAlbumLikes(albumId, user._id);

  album.canPerformAction = user && user._id == album._ownerId;
  album.canLike = user && !album.canPerformAction && userLike == 0;
  album.totalLikes = totalLikes;
  ctx.render(detailsTemplate(album, onDelete, onLike));

  async function onDelete() {
    let deletePost = confirm("Are you sure you want to delete?");
    if (deletePost) {
      await deleteAlbumById(albumId);
      ctx.page.redirect("/dashboard");
    }
  }

  async function onLike() {
    await likeAlbum(albumId);
    ctx.page.redirect("/details/" + albumId);
  }
}
