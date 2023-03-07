import { showHomePage } from "./homePage.js";
import { showLoginPage } from "./login.js";
import { showRegisterPage } from "./register.js";
import { hideSections } from "./utils.js";

window.onload = function () {
  hideSections();
  showHomePage();

  document
    .querySelector("a[href='/login']")
    .addEventListener("click", showLoginPage);
  document
    .querySelector("a[href='/logout']")
    .addEventListener("click", logoutUser);
  document
    .querySelector("a[href='/register']")
    .addEventListener("click", showRegisterPage);
};

async function logoutUser(e) {
  e.preventDefault();
  45;
  const url = "http://localhost:3030/users/logout";
  await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": localStorage.getItem("accessToken"),
    },
  });
  localStorage.clear();
  showLoginPage();
}
