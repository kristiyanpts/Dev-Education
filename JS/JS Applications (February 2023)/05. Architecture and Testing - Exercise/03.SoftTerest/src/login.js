import { post } from "./data/api.js";
import { showHome } from "./home.js";
import { hideSections } from "./utils.js";

export function showLogin() {
  hideSections();
  document.getElementById("page-login").style.display = "block";
  let form = document.querySelector("#page-login form");
  form.addEventListener("submit", loginUser);
}

async function loginUser(e) {
  e.preventDefault();
  let formData = new FormData(e.target);
  let { email, password } = Object.fromEntries(formData.entries());
  let user = await post("/users/login", { email, password });
  localStorage.setItem(
    "userData",
    JSON.stringify({
      email: user.email,
      accessToken: user.accessToken,
      id: user._id,
    })
  );
  showHome();
}
