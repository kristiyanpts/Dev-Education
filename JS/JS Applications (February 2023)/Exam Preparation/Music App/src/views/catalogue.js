import { getAllAlbums } from "../api/music.js";
import { html } from "../lib.js";
import { getUserData } from "../utils.js";

let catalogueTemplate = (albums, user) => html`
  <section id="catalogPage">
    <h1>All Albums</h1>
    ${albums.length > 0
      ? albums.map((e) => albumTemplate(e, user))
      : html`<p>No Albums in Catalog!</p>`}
  </section>
`;

let albumTemplate = (album, user) => html`<div class="card-box">
  <img src=${album.imgUrl} />
  <div>
    <div class="text-center">
      <p class="name">Name: ${album.name}</p>
      <p class="artist">Artist: ${album.artist}</p>
      <p class="genre">Genre: ${album.genre}</p>
      <p class="price">Price: $${album.price}</p>
      <p class="date">Release Date: ${album.releaseDate}</p>
    </div>
    ${user
      ? html`<div class="btn-group">
          <a href="/details/${album._id}" id="details">Details</a>
        </div>`
      : null}
  </div>
</div>`;

export async function showCatalogue(ctx) {
  let albums = await getAllAlbums();
  let user = getUserData();
  ctx.render(catalogueTemplate(albums, user));
}
