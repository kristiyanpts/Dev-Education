import { logoutUser } from "../api/user.js";
import { html, page, render } from "../lib.js";
import { getUserData } from "../utils.js";
let header = document.querySelector("nav");

let navTemplate = (user, logout) => html`<a href="/dashboard">All Memes</a>
  ${user
    ? html`<div class="user">
        <a href="/create">Create Meme</a>
        <div class="profile">
          <span>Welcome, ${user.email}</span>
          <a href="/myprofile">My Profile</a>
          <a @click=${logout} href="javascript:void(0)">Logout</a>
        </div>
      </div>`
    : html`<div class="guest">
        <div class="profile">
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>
        <a class="active" href="/">Home Page</a>
      </div>`} `;

export function showNav() {
  let user = getUserData();
  render(navTemplate(user, logout), header);
}

function logout() {
  logoutUser();
  showNav();
  page.redirect("/");
}
