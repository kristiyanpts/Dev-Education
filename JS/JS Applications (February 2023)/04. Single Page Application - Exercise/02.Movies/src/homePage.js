import { showAddMovie } from "./addMovie.js";
import { showDetails } from "./movieDetails.js";
import { checkLoginState, hideSections } from "./utils.js";

export function showHomePage() {
  hideSections();
  document.getElementById("home-page").style.display = "block";
  checkLoginState();
  loadMovies();
  document
    .querySelector("a[href='/addmovie']")
    .addEventListener("click", showAddMovie);
}

let movieList = document.getElementById("movies-list");
movieList.addEventListener("click", (e) => {
  if (e.target.tagName == "BUTTON") {
    e.preventDefault();
    const id = e.target.getAttribute("data-id");
    showDetails(id);
  }
});

async function loadMovies() {
  const url = "http://localhost:3030/data/movies";
  const response = await fetch(url);
  const data = await response.json();
  movieList.innerHTML = "";

  data.forEach((m) => {
    const movieDiv = document.createElement("div");
    movieDiv.setAttribute("class", "card mb-4");
    movieDiv.innerHTML = `
    <img class="card-img-top" src="${m.img}"
        alt="Card image cap" width="400">
    <div class="card-body">
        <h4 class="card-title">${m.title}</h4>
    </div>
    <div class="card-footer">
        <a href="/details/${m._id}">
            <button data-id="${m._id}" type="button" class="btn btn-info">Details</button>
        </a>
    </div>`;
    movieList.appendChild(movieDiv);
  });
}
