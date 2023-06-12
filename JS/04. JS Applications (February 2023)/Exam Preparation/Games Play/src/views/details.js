import {
  deleteGameById,
  getGameById,
  getGameComments,
  commentGame,
} from "../api/games.js";
import { html } from "../lib.js";
import { createSubmitHandler, getUserData } from "../utils.js";

let detailsTemplate = (game, onDelete, onComment) => html`<section
  id="game-details"
>
  <h1>Game Details</h1>
  <div class="info-section">
    <div class="game-header">
      <img class="game-img" src=${game.imageUrl} />
      <h1>${game.title}</h1>
      <span class="levels">MaxLevel: ${game.maxLevel}</span>
      <p class="type">${game.category}</p>
    </div>

    <p class="text">${game.summary}</p>

    <div class="details-comments">
      <h2>Comments:</h2>
      ${game.comments.length > 0
        ? html`<ul>
            ${game.comments.map(commentTemplate)}
          </ul>`
        : html`<p class="no-comment">No comments.</p>`}
    </div>

    ${game.canPerformAction
      ? html`<div class="buttons">
          <a href="/edit/${game._id}" class="button">Edit</a>
          <a @click=${onDelete} href="javascript:void(0)" class="button"
            >Delete</a
          >
        </div>`
      : null}
  </div>

  ${game.canComment
    ? html`<article class="create-comment">
        <label>Add new comment:</label>
        <form @submit=${onComment} class="form">
          <textarea name="comment" placeholder="Comment......"></textarea>
          <input class="btn submit" type="submit" value="Add Comment" />
        </form>
      </article>`
    : null}
</section>`;

let commentTemplate = (comment) => html`<li class="comment">
  <p>Content: ${comment.comment}</p>
</li>`;

export async function showDetails(ctx) {
  let gameId = ctx.params.id;
  let user = getUserData();
  let gameComments = await getGameComments(gameId);
  let game = await getGameById(gameId);

  game.canPerformAction = user && user._id == game._ownerId;
  game.canComment = user && !game.canPerformAction;
  game.comments = gameComments;
  ctx.render(detailsTemplate(game, onDelete, createSubmitHandler(onComment)));

  async function onDelete() {
    let deletePost = confirm("Are you sure you want to delete?");
    if (deletePost) {
      await deleteGameById(gameId);
      ctx.page.redirect("/games");
    }
  }

  async function onComment({ comment }) {
    if (comment == "") return alert("Field is required.");
    await commentGame(gameId, comment);
    ctx.page.redirect("/details/" + gameId);
  }
}
