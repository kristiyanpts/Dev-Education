import { page, render } from "./lib.js";
import { getUserData } from "./utils.js";
import { showCreate } from "./views/create.js";
import { showDetails } from "./views/details.js";
import { showEdit } from "./views/edit.js";
import { showHome } from "./views/home.js";
import { showLogin } from "./views/login.js";
import { showNav } from "./views/nav.js";
import { showProfile } from "./views/profile.js";
import { showRegister } from "./views/register.js";
let main = document.getElementById("content");

page(decorateContenxt);
page("index.html", "/");
page("/", showHome);
page("/login", showLogin);
page("/register", showRegister);
page("/create", showCreate);
page("/details/:id", showDetails);
page("/edit/:id", showEdit);
page("/myprofile", showProfile);

showNav();
page.start();

function decorateContenxt(ctx, next) {
  ctx.render = renderMain;
  ctx.updateNav = showNav;
  ctx.userData = getUserData();
  next();
}

function renderMain(content) {
  render(content, main);
}
