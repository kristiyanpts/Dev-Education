import { logoutUser } from "../api/user.js";
import { html, page, render } from "../lib.js";
import { getUserData } from "../utils.js";
let header = document.querySelector("header");

let navTemplate = (user, logout) => html`<nav>
  <a href="/">Theater</a>
  <ul>
    ${user
      ? html` <li><a href="/myprofile">Profile</a></li>
          <li><a href="/create">Create Event</a></li>
          <li @click=${logout}><a href="javascript:void(0)">Logout</a></li>`
      : html`<li><a href="/login">Login</a></li>
          <li><a href="/register">Register</a></li>`}
  </ul>
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