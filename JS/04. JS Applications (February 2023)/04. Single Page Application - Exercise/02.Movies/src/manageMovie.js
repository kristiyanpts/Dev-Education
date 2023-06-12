import { showHomePage } from "./homePage.js";
import { showDetails } from "./movieDetails.js";
import { hideSections } from "./utils.js";

export function manageMovie(type, id) {
  const actions = {
    delete: () => deleteMovie(id),
    edit: () => editMovie(id),
    like: () => likeMovie(id),
  };
  actions[type]();
}

async function deleteMovie(id) {
  const url = `http://localhost:3030/data/movies/${id}`;
  await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": localStorage.getItem("accessToken"),
    },
  });
  // .then(async (res) => {
  //   if (!res.ok) {
  //     let err = await res.json();
  //     throw err;
  //   }
  //   return await res.json();
  // })
  // .then((data) => {
  //   showHomePage();
  // })
  // .catch((err) => {
  //   alert(err.message);
  // });
  showHomePage();
}

async function editMovie(id) {
  const url = `http://localhost:3030/data/movies/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  hideSections();
  let section = document.getElementById("edit-movie");
  section.style.display = "block";
  let form = section.querySelector("form");
  let inputValues = [data.title, data.img];
  let inputFields = Array.from(form.getElementsByTagName("input"));
  let description = form.getElementsByTagName("textarea");
  for (let i = 0; i < inputFields.length; i++) {
    inputFields[i].value = inputValues[i];
  }
  description[0].value = data.description;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    updateMovie(form, id);
  });
}

async function updateMovie(form, id) {
  let formData = new FormData(form);
  let { title, description, img } = Object.fromEntries(formData.entries());
  const url = `http://localhost:3030/data/movies/${id}`;
  await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": localStorage.getItem("accessToken"),
    },
    body: JSON.stringify({
      title,
      description,
      img,
    }),
  })
    .then(async (res) => {
      if (!res.ok) {
        let err = await res.json();
        throw err;
      }
      return await res.json();
    })
    .then((data) => {
      showDetails(id);
    })
    .catch((err) => {
      alert(err.message);
    });
}

async function likeMovie(id) {
  const url = "http://localhost:3030/data/likes";
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": localStorage.getItem("accessToken"),
    },
    body: JSON.stringify({
      movieId: id,
    }),
  })
    .then(async (res) => {
      if (!res.ok) {
        let err = await res.json();
        throw err;
      }
      return await res.json();
    })
    .then((data) => {
      showDetails(id);
    })
    .catch((err) => {
      alert(err.message);
    });
}
