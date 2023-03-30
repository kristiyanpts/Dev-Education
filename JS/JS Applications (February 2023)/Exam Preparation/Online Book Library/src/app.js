import { page, render } from "./lib.js";
import { getUserData } from "./utils.js";
import { showCreate } from "./views/create.js";
import { showDashboard } from "./views/dashboard.js";
import { showDetails } from "./views/details.js";
import { showEdit } from "./views/edit.js";
import { showLogin } from "./views/login.js";
import { showNav } from "./views/nav.js";
import { showProfile } from "./views/profile.js";
import { showRegister } from "./views/register.js";
let main = document.querySelector("main");

page(decorateContenxt);
page("/index.html", "/dashboard");
page("/login", showLogin);
page("/register", showRegister);
page("/dashboard", showDashboard);
page("/create", showCreate);
page("/details/:id", showDetails);
page("/edit/:id", showEdit);
page("/profile", showProfile);

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
