window.onload = function () {
  let form = document.querySelector("form");
  form.addEventListener("submit", RegisterUser);
};

async function RegisterUser(event) {
  event.preventDefault();
  let formData = new FormData(event.target);
  let { email, password, rePass } = Object.fromEntries(formData.entries());

  if (email == "" || password == "") {
    alert("All fields are required!");
    return;
  }
  if (password != rePass) {
    alert("Passwords do not match!");
    return;
  }

  const url = "http://localhost:3030/users/register";
  let data = { email, password };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok == false) {
      let error = response.json();
      throw error;
    }

    let userData = await response.json();
    localStorage.setItem("accessToken", userData.accessToken);
    localStorage.setItem("_id", userData._id);
    window.location.href = "index.html";
  } catch (error) {
    alert(error.message);
  }
}
