async function solution() {
  let main = document.getElementById("main");

  try {
    let articleTitlesResponse = await fetch(
      "http://localhost:3030/jsonstore/advanced/articles/list"
    );
    let articleTitles = await articleTitlesResponse.json();

    for (const articleTitle of articleTitles) {
      try {
        let articleExtraResponse = await fetch(
          `http://localhost:3030/jsonstore/advanced/articles/details/${articleTitle._id}`
        );
        let articleExtra = await articleExtraResponse.json();

        let div = document.createElement("div");
        div.setAttribute("class", "accordion");
        div.innerHTML = `
            <div class="head">
            <span>${articleTitle.title}</span>
                <button class="button" id="${articleTitle._id}">More</button>
            </div>
            <div class="extra">
            <p>${articleExtra.content}</p>
            </div>
        `;
        main.appendChild(div);
      } catch (error) {}
    }

    let buttons = Array.from(document.querySelectorAll("button"));
    let extras = Array.from(document.querySelectorAll(".extra"));
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function (event) {
        console.log("vlizam");
        if (buttons[i].textContent === "More") {
          buttons[i].textContent = "Less";
          extras[i].style.display = "block";
        } else if (buttons[i].textContent === "Less") {
          buttons[i].textContent = "More";
          extras[i].style.display = "none";
        }
      });
    }
  } catch (error) {}
}

solution();
