import { showCreate } from "./create.js";
import { showDashboard } from "./dashboard.js";
import { get } from "./data/api.js";
import { showHome } from "./home.js";
import { showLogin } from "./login.js";
import { showRegister } from "./register.js";
import { checkUserState } from "./utils.js";

const navTargets = {
  "/": showDashboard,
  "/create": showCreate,
  "/logout": logoutUser,
  "/login": showLogin,
  "/register": showRegister,
};

window.onload = function () {
  showHome();
  Array.from(document.getElementsByClassName("nav-item")).forEach((nav) =>
    nav.addEventListener("click", clickedNavItem)
  );
};

function clickedNavItem(e) {
  e.preventDefault();
  let tHref = e.target.getAttribute("href");
  if (tHref !== undefined) {
    if (
      navTargets[tHref] !== undefined &&
      typeof navTargets[tHref] == "function"
    ) {
      navTargets[tHref]();
    }
  }
}

async function logoutUser() {
  await get("/users/logout");
  localStorage.clear();
  checkUserState();
}
