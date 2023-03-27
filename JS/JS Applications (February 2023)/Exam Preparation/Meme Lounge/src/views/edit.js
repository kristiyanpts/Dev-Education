import { getMemeById, updateMemeById } from "../api/memes.js";
import { html } from "../lib.js";
import { createSubmitHandler } from "../utils.js";
import { showNotification } from "./notification.js";

let editTemplate = (meme, onEdit) => html`<section id="edit-meme">
  <form @submit=${onEdit} id="edit-form">
    <h1>Edit Meme</h1>
    <div class="container">
      <label for="title">Title</label>
      <input
        id="title"
        type="text"
        placeholder="Enter Title"
        name="title"
        .value=${meme.title}
      />
      <label for="description">Description</label>
      <textarea
        id="description"
        placeholder="Enter Description"
        name="description"
      >
${meme.description}</textarea
      >
      <label for="imageUrl">Image Url</label>
      <input
        id="imageUrl"
        type="text"
        placeholder="Enter Meme ImageUrl"
        name="imageUrl"
        .value=${meme.imageUrl}
      />
      <input type="submit" class="registerbtn button" value="Edit Meme" />
    </div>
  </form>
</section>`;

export async function showEdit(ctx) {
  let memeId = ctx.params.id;
  let meme = await getMemeById(memeId);
  ctx.render(editTemplate(meme, createSubmitHandler(onEdit)));

  async function onEdit({ title, description, imageUrl }) {
    if (title == "" || imageUrl == "" || description == "")
      return showNotification("All fields are required.");

    await updateMemeById(memeId, {
      title,
      description,
      imageUrl,
    });
    ctx.page.redirect("/details/" + memeId);
  }
}
