async function lockedProfile() {
  let main = document.getElementById("main");
  main.innerHTML = "";
  try {
    let usersResponse = await fetch(
      "http://localhost:3030/jsonstore/advanced/profiles"
    );
    let users = await usersResponse.json();
    for (const [user, userInfo] of Object.entries(users)) {
      let divProfile = document.createElement("div");
      divProfile.classList.add("profile");
      divProfile.innerHTML = `
        <img src="./iconProfile2.png" class="userIcon" />
      	<label>Lock</label>
      	<input type="radio" name="user1Locked" value="lock" checked>
      	<label>Unlock</label>
      	<input type="radio" name="user1Locked" value="unlock"><br>
      	<hr>
      	<label>Username</label>
      	<input type="text" name="user1Username" value="${userInfo.username}" disabled readonly />
      	<div id="user1HiddenFields" style = "display: none;">
      		<hr>
      		<label>Email:</label>
      		<input type="email" name="user1Email" value="${userInfo.email}" disabled readonly />
      		<label>Age:</label>
      		<input type="text" name="user1Age" value="${userInfo.age}" disabled readonly />
      	</div>

      	<button>Show more</button>
       `;
      main.appendChild(divProfile);
    }

    let buttons = Array.from(document.querySelectorAll("button"));
    let radioButtons = Array.from(
      document.querySelectorAll("input[type=radio][value=lock]")
    );
    let hiddenFields = Array.from(
      document.querySelectorAll("#user1HiddenFields")
    );

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function (event) {
        if (!radioButtons[i].checked) {
          if (buttons[i].textContent === "Show more") {
            hiddenFields[i].style.display = "block";
            buttons[i].textContent = "Hide it";
          } else if (buttons[i].textContent === "Hide it") {
            hiddenFields[i].style.display = "none";
            buttons[i].textContent = "Show more";
          }
        }
      });
    }
    console.log(buttons);
  } catch (error) {}
}
