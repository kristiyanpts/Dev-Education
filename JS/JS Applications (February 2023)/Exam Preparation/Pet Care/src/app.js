import { showDashboard } from "./dashboard.js";
import { showHome } from "./home.js";
import { page, render } from "./lib.js";
import { showNav } from "./nav.js";
import { getUserData } from "./utils.js";
let main = document.getElementById("content");

page(decorateContenxt);
page("index.html", "/");
page("/", showHome);
page("/dashboard", showDashboard);

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
