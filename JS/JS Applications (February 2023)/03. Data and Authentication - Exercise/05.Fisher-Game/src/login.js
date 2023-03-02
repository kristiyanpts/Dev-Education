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
  form.addEventListener("submit", loginUser);
};

async function loginUser(event) {
  event.preventDefault();
  let notification = document.querySelector(".notification");
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
    .then((res) => {
      if (res.ok == false) {
        let err = res.json();
        throw err;
      }
      return res.json();
    })
    .then((data) => {
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("_id", data._id);
      localStorage.setItem("email", data.email);
      window.location.href = "index.html";
    })
    .catch((err) => {
      notification.textContent = "Couldn't log you in.";
    });
}
