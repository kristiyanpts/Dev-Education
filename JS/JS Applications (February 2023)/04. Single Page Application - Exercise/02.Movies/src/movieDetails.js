import { manageMovie } from "./manageMovie.js";
import { hideSections } from "./utils.js";

export function showDetails(id) {
  hideSections();
  document.getElementById("movie-example").style.display = "block";
  getMovie(id);
}

async function getMovie(id) {
  const url = `http://localhost:3030/data/movies/${id}`;
  const likeUrl = `http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`;
  const likedUrl = `http://localhost:3030/data/likes?where=movieId%3D%22${id}%22%20and%20_ownerId%3D%22${localStorage.getItem(
    "id"
  )}%22&count`;
  const response = await fetch(url);
  const data = await response.json();
  const likeResponse = await fetch(likeUrl);
  const likeData = await likeResponse.json();
  const likedResponse = await fetch(likedUrl);
  const likedData = await likedResponse.json();

  document.querySelector(
    "#movie-example .container h1"
  ).textContent = `Movie title: ${data.title}`;
  document.querySelector("#movie-example .container .col-md-8 img").src =
    data.img;
  document.querySelector(
    "#movie-example .container .text-center p"
  ).textContent = data.description;

  let buttonDelete = document.querySelector("a[href='/deletemovie']");
  let buttonEdit = document.querySelector("a[href='/editmovie']");
  let buttonLike = document.querySelector("a[href='/likemovie']");
  let likes = document.querySelector("span[class='enrolled-span']");
  let hasLiked = false;
  if (likedData != 0) {
    hasLiked = true;
  }
  buttonDelete.style.display = "none";
  buttonEdit.style.display = "none";
  buttonLike.style.display = "none";
  likes.style.display = "none";
  buttonDelete.addEventListener("click", (e) => {
    e.preventDefault();
    manageMovie("delete", id);
  });
  buttonEdit.addEventListener("click", (e) => {
    e.preventDefault();
    manageMovie("edit", id);
  });
  buttonLike.addEventListener("click", (e) => {
    e.preventDefault();
    manageMovie("like", id);
  });

  if (localStorage.getItem("id") == data._ownerId) {
    buttonDelete.style.display = "inline-block";
    buttonEdit.style.display = "inline-block";
  } else if (localStorage.getItem("accessToken") !== null && !hasLiked) {
    buttonLike.style.display = "inline-block";
  } else {
    likes.style.display = "inline-block";
  }
  likes.textContent = `Liked ${likeData}`;
}
