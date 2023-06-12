import { getFruitById, updateFruitById } from "../api/fruits.js";
import { html } from "../lib.js";
import { createSubmitHandler } from "../utils.js";

let editTemplate = (fruit, onEdit) => html`<section id="edit">
  <div class="form">
    <h2>Edit Fruit</h2>
    <form @submit=${onEdit} class="edit-form">
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Fruit Name"
        .value=${fruit.name}
      />
      <input
        type="text"
        name="imageUrl"
        id="Fruit-image"
        placeholder="Fruit Image URL"
        .value=${fruit.imageUrl}
      />
      <textarea
        id="fruit-description"
        name="description"
        placeholder="Description"
        rows="10"
        cols="50"
      >
${fruit.description}</textarea
      >
      <textarea
        id="fruit-nutrition"
        name="nutrition"
        placeholder="Nutrition"
        rows="10"
        cols="50"
      >
${fruit.nutrition}</textarea
      >
      <button type="submit">post</button>
    </form>
  </div>
</section>`;

export async function showEdit(ctx) {
  let fruitId = ctx.params.id;
  let fruit = await getFruitById(fruitId);
  ctx.render(editTemplate(fruit, createSubmitHandler(onEdit)));

  async function onEdit({ name, imageUrl, description, nutrition }) {
    if (name == "" || description == "" || nutrition == "" || imageUrl == "")
      return alert("All fields are required.");

    await updateFruitById(fruitId, {
      name,
      imageUrl,
      description,
      nutrition,
    });
    ctx.page.redirect("/details/" + fruitId);
  }
}
