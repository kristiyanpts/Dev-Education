import { getAllUserBooks } from "../api/books.js";
import { html } from "../lib.js";
import { getUserData } from "../utils.js";

let profileTemplate = (books) => html`<section
  id="my-books-page"
  class="my-books"
>
  <h1>My Books</h1>
  ${books.length > 0
    ? html`<ul class="my-books-list">
        ${books.map(bookTemplate)}
      </ul>`
    : html`<p class="no-books">No books in database!</p>`}
</section>`;

let bookTemplate = (book) => html` <li class="otherBooks">
  <h3>${book.title}</h3>
  <p>Type: ${book.type}</p>
  <p class="img"><img src=${book.imageUrl} /></p>
  <a class="button" href="/details/${book._id}">Details</a>
</li>`;

export async function showProfile(ctx) {
  let user = getUserData();
  let books = await getAllUserBooks(user._id);

  ctx.render(profileTemplate(books));
}
