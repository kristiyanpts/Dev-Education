let buttonLoad = document.getElementById("loadBooks");
let form = document.querySelector("form");
let tbody = document.querySelector("tbody");

buttonLoad.addEventListener("click", loadBooks);
form.addEventListener("submit", addBook);
tbody.addEventListener("click", bookAction);

window.onload = function () {
  loadBooks();
};

async function loadBooks() {
  const url = "http://localhost:3030/jsonstore/collections/books";
  const response = await fetch(url);
  const data = await response.json();

  tbody.innerHTML = "";

  for (const [bookId, book] of Object.entries(data)) {
    let tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>
            <button data-id="${bookId}">Edit</button>
            <button data-id="${bookId}">Delete</button>
        </td>
    `;
    tbody.appendChild(tr);
  }
}

async function addBook(event) {
  event.preventDefault();
  let formData = new FormData(event.target);
  let { title, author } = Object.fromEntries(formData.entries());

  if (title == "" || author == "") {
    return;
  }

  let url = "http://localhost:3030/jsonstore/collections/books";
  let data = { title, author };
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      loadBooks();
    })
    .catch((error) => {
      alert(error.message);
    });
}

function bookAction(event) {
  if (event.target.tagName == "BUTTON") {
    if (event.target.textContent == "Edit") {
      editBook(event.target.getAttribute("data-id"));
    } else if (event.target.textContent == "Delete") {
      deleteBook(event.target.getAttribute("data-id"));
    }
  }
}

async function editBook(bookId) {
  document.querySelector("form h3").textContent = "Edit FORM";
  document.querySelector("form button").textContent = "Save";
  const url = `http://localhost:3030/jsonstore/collections/books/${bookId}`;
  const response = await fetch(url);
  const data = await response.json();
  const { title, author } = data;
  document.querySelector("form input[name=title]").value = title;
  document.querySelector("form input[name=author]").value = author;
  form.removeEventListener("submit", addBook);
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    let formData = new FormData(event.target);
    let { title, author } = Object.fromEntries(formData.entries());
    await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, author }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        loadBooks();
        document.querySelector("form h3").textContent = "FORM";
        document.querySelector("form button").textContent = "Submit";
        form.removeEventListener("submit", this);
        form.addEventListener("submit", addBook);
        document.querySelector("form input[name=title]").value = "";
        document.querySelector("form input[name=author]").value = "";
      })
      .catch((error) => {
        alert(error.message);
      });
  });
}

async function deleteBook(bookId) {
  await fetch(`http://localhost:3030/jsonstore/collections/books/${bookId}`, {
    method: "DELETE",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      loadBooks();
    })
    .catch((error) => {
      alert(error.message);
    });
}
