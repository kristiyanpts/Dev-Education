import { post } from "./data/api.js";
import { showHome } from "./home.js";
import { hideSections } from "./utils.js";
let register = document.getElementById("page-register");
export function showRegister() {
  hideSections();
  document.querySelector("main").replaceChildren(register);
  let form = document.querySelector("#page-register form");
  form.addEventListener("submit", registerUser);
}

async function registerUser(e) {
  e.preventDefault();
  let formData = new FormData(e.target);
  let { email, password, repeatPassword } = Object.fromEntries(
    formData.entries()
  );
  if (email.length < 3 || password.length < 3) {
    alert("Please fill in all fields with at least 3 characters.");
    return;
  }
  if (password != repeatPassword) {
    alert("Passwords do not match.");
    return;
  }
  let user = await post("/users/register", { email, password });
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
