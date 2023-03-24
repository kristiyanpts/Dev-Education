import { logoutUser } from "../api/user.js";
import { html, page, render } from "../lib.js";
import { getUserData } from "../utils.js";
let header = document.querySelector("header");

let navTemplate = (user, logout) => html`<nav>
  <a class="active" href="/">Home</a>
  <a href="/listings">All Listings</a>
  <a href="/search">By Year</a>
  ${user
    ? html`<div id="profile">
        <a>Welcome ${user.username}</a>
        <a href="/mylistings">My Listings</a>
        <a href="/create">Create Listing</a>
        <a @click=${logout} href="javascript:void(0)">Logout</a>
      </div>`
    : html`<div id="guest">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </div>`}
</nav>`;

export function showNav() {
  let user = getUserData();
  render(navTemplate(user, logout), header);
}

function logout() {
  logoutUser();
  showNav();
  page.redirect("/");
}
