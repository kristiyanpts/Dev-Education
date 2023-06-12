import { page, render } from "./lib.js";
import { getUserData } from "./utils.js";
import { showDashboard } from "./views/dashboard.js";
import { showCreate } from "./views/create.js";
import { showDetails } from "./views/details.js";
import { showEdit } from "./views/edit.js";
import { showLogin } from "./views/login.js";
import { showNav } from "./views/nav.js";
import { showRegister } from "./views/register.js";
import { showMyPosts } from "./views/myposts.js";
let main = document.getElementById("main-content");

page(decorateContenxt);
page("index.html", "/");
page("/", showDashboard);
page("/login", showLogin);
page("/register", showRegister);
page("/create", showCreate);
page("/details/:id", showDetails);
page("/edit/:id", showEdit);
page("/myposts", showMyPosts);

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
