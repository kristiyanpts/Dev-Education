import { showHomePage } from "./homePage.js";
import { hideSections } from "./utils.js";

export function showAddMovie(e) {
  e.preventDefault();
  hideSections();
  document.getElementById("add-movie").style.display = "block";
  document
    .getElementById("add-movie-form")
    .addEventListener("submit", addMovie);
}

function addMovie(e) {
  e.preventDefault();
  let formData = new FormData(e.target);
  let { title, description, img } = Object.fromEntries(formData.entries());
  if (title === "" || description === "" || img === "") {
    alert("All fields are required");
    return;
  }
  const url = "http://localhost:3030/data/movies";
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": localStorage.getItem("accessToken"),
    },
    body: JSON.stringify({ title, description, img }),
  })
    .then(async (res) => {
      if (!res.ok) {
        let err = await res.json();
        throw err;
      }
      return await res.json();
    })
    .then((data) => {
      showHomePage();
    })
    .catch((err) => {
      alert(err.message);
    });
}
