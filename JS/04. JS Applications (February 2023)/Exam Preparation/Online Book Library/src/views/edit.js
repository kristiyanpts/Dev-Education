import { getBookById, updateBookById } from "../api/books.js";
import { html } from "../lib.js";
import { createSubmitHandler } from "../utils.js";

let editTemplate = (book, onEdit) => html`<section id="edit-page" class="edit">
  <form @submit=${onEdit} id="edit-form" action="#" method="">
    <fieldset>
      <legend>Edit my Book</legend>
      <p class="field">
        <label for="title">Title</label>
        <span class="input">
          <input type="text" name="title" id="title" .value=${book.title} />
        </span>
      </p>
      <p class="field">
        <label for="description">Description</label>
        <span class="input">
          <textarea name="description" id="description">
${book.description}</textarea
          >
        </span>
      </p>
      <p class="field">
        <label for="image">Image</label>
        <span class="input">
          <input
            type="text"
            name="imageUrl"
            id="image"
            .value=${book.imageUrl}
          />
        </span>
      </p>
      <p class="field">
        <label for="type">Type</label>
        <span class="input">
          <select id="type" name="type" .value=${book.type}>
            <option value="Fiction" selected>Fiction</option>
            <option value="Romance">Romance</option>
            <option value="Mistery">Mistery</option>
            <option value="Classic">Clasic</option>
            <option value="Other">Other</option>
          </select>
        </span>
      </p>
      <input class="button submit" type="submit" value="Save" />
    </fieldset>
  </form>
</section>`;

export async function showEdit(ctx) {
  let bookId = ctx.params.id;
  let book = await getBookById(bookId);
  ctx.render(editTemplate(book, createSubmitHandler(onEdit)));

  async function onEdit({ title, description, imageUrl, type }) {
    if (title == "" || type == "" || description == "" || imageUrl == "")
      return alert("All fields are required.");

    await updateBookById(bookId, {
      title,
      description,
      imageUrl,
      type,
    });
    ctx.page.redirect("/details/" + bookId);
  }
}
