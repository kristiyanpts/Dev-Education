import { deleteAlbumById, getAlbumById } from "../api/music.js";
import { html } from "../lib.js";
import { getUserData } from "../utils.js";

let detailsTemplate = (album, onDelete) => html` <section id="detailsPage">
  <div class="wrapper">
    <div class="albumCover">
      <img src=${album.imgUrl} />
    </div>
    <div class="albumInfo">
      <div class="albumText">
        <h1>Name: ${album.name}</h1>
        <h3>Artist: ${album.artist}</h3>
        <h4>Genre: ${album.genre}</h4>
        <h4>Price: $${album.price}</h4>
        <h4>Date: ${album.releaseDate}</h4>
        <p>${album.description}</p>
      </div>

      ${album.canPerformAction
        ? html`<div class="actionBtn">
            <a href="/edit/${album._id}" class="edit">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" class="remove"
              >Delete</a
            >
          </div>`
        : null}
    </div>
  </div>
</section>`;

export async function showDetails(ctx) {
  let albumId = ctx.params.id;
  let user = getUserData();
  let album = await getAlbumById(albumId);

  album.canPerformAction = user && user._id == album._ownerId;
  ctx.render(detailsTemplate(album, onDelete));

  async function onDelete() {
    let deletePost = confirm("Are you sure you want to delete?");
    if (deletePost) {
      await deleteAlbumById(albumId);
      ctx.page.redirect("/catalog");
    }
  }
}
