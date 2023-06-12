function solve() {}

let isLoggedIn = localStorage.getItem("accessToken") != null ? true : false;
let currentWindow = window.location.pathname.split("/").pop();
if (isLoggedIn && currentWindow == "homeLogged.html") {
  let form = document.querySelector("form[action='']");
  form.addEventListener("submit", createFurniture);
  let logoutBtn = document.getElementById("logoutBtn");
  logoutBtn.addEventListener("click", logoutUser);
  let buttonBuy = Array.from(document.querySelectorAll("button"))[1];
  buttonBuy.addEventListener("click", buyFurniture);
  let buttonShowSales = Array.from(document.querySelectorAll("button"))[2];
  buttonShowSales.addEventListener("click", showSales);
}
if (currentWindow == "login.html") {
  let loginForm = document.querySelector("form[action='/login']");
  loginForm.addEventListener("submit", loginUser);
  let registerForm = document.querySelector("form[action='/register']");
  registerForm.addEventListener("submit", registerUser);
}
if (currentWindow == "home.html" || currentWindow == "homeLogged.html") {
  getFurniture();
}

async function registerUser(event) {
  event.preventDefault();
  let formData = new FormData(event.target);
  let { email, password, rePass } = Object.fromEntries(formData.entries());
  const url = "http://localhost:3030/users/register";
  if (email == "" || password == "") {
    return alert("All fields are required!");
  }
  if (password != rePass) {
    return alert("Passwords do not match!");
  }

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
      localStorage.setItem("email", data.email);
      localStorage.setItem("id", data._id);
      window.location.href = "homeLogged.html";
    })
    .catch((err) => {
      alert(err.message);
    });
}

async function logoutUser() {
  const url = "http://localhost:3030/users/logout";
  await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": localStorage.getItem("accessToken"),
    },
  });
  localStorage.clear();
  window.location.href = "home.html";
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
      window.location.href = "homeLogged.html";
    })
    .catch((err) => {
      alert(err.message);
    });
}

async function createFurniture(event) {
  event.preventDefault();
  let formData = new FormData(event.target);
  let { name, price, factor, img } = Object.fromEntries(formData.entries());
  if (name === "" || price === "" || factor === "" || img === "") {
    return;
  }
  const url = "http://localhost:3030/data/furniture";
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": localStorage.getItem("accessToken"),
    },
    body: JSON.stringify({
      name,
      price,
      factor,
      img,
    }),
  })
    .then(async (res) => {
      if (res.ok == false) {
        let err = await res.json();
        throw err;
      }
      return await res.json();
    })
    .then((data) => {
      getFurniture();
    })
    .catch((err) => {
      alert(err.message);
    });
}

async function getFurniture() {
  let isDisabled = localStorage.getItem("accessToken") != null ? false : true;
  let tbody = document.querySelector(".table tbody");
  tbody.innerHTML = "";
  const url = "http://localhost:3030/data/furniture";
  await fetch(url)
    .then(async (response) => {
      if (response.ok == false) {
        let err = await response.json();
        throw err;
      }
      return await response.json();
    })
    .then((data) => {
      data.forEach((f) => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
          <td>
            <img src="${f.img}">
          </td>
          <td>
              <p>${f.name}</p>
          </td>
          <td>
              <p>${f.price}</p>
          </td>
          <td>
              <p>${f.factor}</p>
          </td>
          <td>
              <input data-id="${f._id}" type="checkbox" ${
          isDisabled ? "disabled" : ""
        }/>
          </td>
        `;
        tbody.appendChild(tr);
      });
    })
    .catch((err) => {
      alert(err.message);
    });
}

async function buyFurniture() {
  let checkBoxes = document.querySelectorAll("input[type=checkbox]:checked");

  if (checkBoxes.length == 0) {
    return alert("Please select furniture!");
  }

  checkBoxes.forEach(async (f) => {
    let id = f.getAttribute("data-id");
    const furnitureUrl = `http://localhost:3030/data/furniture/${id}`;

    await fetch(furnitureUrl)
      .then(async (response) => {
        if (response.ok == false) {
          let err = await response.json();
          throw err;
        }
        return await response.json();
      })
      .then((data) => {
        orderProduct(data);
      })
      .catch((err) => {
        alert(err.message);
      });
  });
}

async function orderProduct(data) {
  const ordersUrl = `http://localhost:3030/data/orders`;

  await fetch(ordersUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": localStorage.getItem("accessToken"),
    },
    body: JSON.stringify(data),
  })
    .then(async (res) => {
      if (res.ok == false) {
        let err = await res.json();
        throw err;
      }
      return await res.json();
    })
    .then((data) => {
      console.log("Successfully ordered product");
    })
    .catch((err) => {
      alert(err.message);
    });
}

async function showSales() {
  const url = `http://localhost:3030/data/orders?where=_ownerId%3D"${localStorage.getItem(
    "id"
  )}"`;
  let productsBought = [];
  let totalPrice = 0;
  await fetch(url)
    .then(async (res) => {
      if (res.ok == false) {
        let err = await res.json();
        throw err;
      }
      return await res.json();
    })
    .then((data) => {
      data.forEach((f) => {
        if (!productsBought.includes(f.name)) {
          productsBought.push(f.name);
        }
        totalPrice += Number(f.price);
      });
    })
    .catch((err) => {
      alert(err.message);
    });

  let paras = Array.from(document.querySelectorAll(".orders p span"));
  paras[0].textContent = productsBought.join(", ");
  paras[1].textContent = totalPrice + " $";
}
