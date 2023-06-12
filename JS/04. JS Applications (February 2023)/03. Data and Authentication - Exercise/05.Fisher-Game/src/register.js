window.onload = function () {
  if (localStorage.getItem("accessToken")) {
    document.getElementById("user").style.display = "inline-block";
    document.getElementById("guest").style.display = "none";
    document.querySelector(".email span").textContent =
      localStorage.getItem("email");
  } else {
    document.getElementById("user").style.display = "none";
    document.getElementById("guest").style.display = "inline-block";
  }

  let form = document.querySelector("form");
  form.addEventListener("submit", registerUser);
};

async function registerUser(event) {
  event.preventDefault();
  let notification = document.querySelector(".notification");
  let formData = new FormData(event.target);
  let { email, password, rePass } = Object.fromEntries(formData.entries());
  const url = "http://localhost:3030/users/register";
  if (email == "" || password == "") {
    return (notification.textContent = "All fields are required!");
  }
  if (password != rePass) {
    return (notification.textContent = "Passwords do not match!");
  }

  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => {
      if (res.ok == false) {
        let err = res.json();
        throw err;
      }
      return res.json();
    })
    .then((data) => {
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("email", data.email);
      localStorage.setItem("_id", data._id);
      window.location.href = "index.html";
    })
    .catch((err) => {
      notification.textContent = err.message;
    });
}
