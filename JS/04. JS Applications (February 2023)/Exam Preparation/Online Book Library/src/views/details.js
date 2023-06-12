import {
  deleteBookById,
  getBookById,
  getBooksLikes,
  getUserBookLikes,
  likeBook,
} from "../api/books.js";
import { html } from "../lib.js";
import { getUserData } from "../utils.js";

let detailsTemplate = (book, onDelete, onLike) => html`<section
  id="details-page"
  class="details"
>
  <div class="book-information">
    <h3>${book.title}</h3>
    <p class="type">Type: ${book.type}</p>
    <p class="img"><img src=${book.imageUrl} /></p>
    <div class="actions">
      ${book.canPerformAction
        ? html`<a class="button" href="/edit/${book._id}">Edit</a>
            <a @click=${onDelete} class="button" href="javascript:void(0)"
              >Delete</a
            >`
        : null}
      ${book.canLike
        ? html`<a @click=${onLike} class="button" href="javascript:void(0)"
            >Like</a
          >`
        : null}

      <div class="likes">
        <img class="hearts" src="/images/heart.png" />
        <span id="total-likes">Likes: ${book.totalLikes}</span>
      </div>
    </div>
  </div>
  <div class="book-description">
    <h3>Description:</h3>
    <p>${book.description}</p>
  </div>
</section>`;

export async function showDetails(ctx) {
  let bookId = ctx.params.id;
  let user = getUserData();
  let book = await getBookById(bookId);
  let totalLikes = await getBooksLikes(bookId);
  let userLike = user && (await getUserBookLikes(bookId, user._id));

  book.canPerformAction = user && user._id == book._ownerId;
  book.canLike = user && !book.canPerformAction && userLike == 0;
  book.totalLikes = totalLikes;
  ctx.render(detailsTemplate(book, onDelete, onLike));

  async function onDelete() {
    let deletePost = confirm("Are you sure you want to delete?");
    if (deletePost) {
      await deleteBookById(bookId);
      ctx.page.redirect("/dashboard");
    }
  }

  async function onLike() {
    await likeBook(bookId);
    ctx.page.redirect("/details/" + bookId);
  }
}
