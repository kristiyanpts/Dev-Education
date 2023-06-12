window.onload = function () {
  let form = document.querySelector("form");
  form.addEventListener("submit", Login);
};

async function Login(event) {
  event.preventDefault();
  let formData = new FormData(event.target);
  let { email, password } = Object.fromEntries(formData.entries());
  let data = {
    email,
    password,
  };
  fetch("http://localhost:3030/users/login", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((user) => {
      localStorage.setItem("accessToken", user.accessToken);
      localStorage.setItem("username", user.username);
      localStorage.setItem("_id", user._id);
      window.location.href = "index.html";
    });
}
