import { showHomePage } from "./homePage.js";
import { hideSections } from "./utils.js";

export function showLoginPage(e) {
  e.preventDefault();
  hideSections();
  document.getElementById("form-login").style.display = "block";

  document.getElementById("login-form").addEventListener("submit", loginUser);
}

async function loginUser(event) {
  event.preventDefault();
  let formData = new FormData(event.target);
  let { email, password } = Object.fromEntries(formData.entries());

  const url = "http://localhost:3030/users/login";

  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then(async (res) => {
      if (res.ok == false) {
        let err = await res.json();
        throw err;
      }
      return await res.json();
    })
    .then((data) => {
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("id", data._id);
      localStorage.setItem("email", data.email);
      showHomePage();
    })
    .catch((err) => {
      alert(err.message);
    });
}
