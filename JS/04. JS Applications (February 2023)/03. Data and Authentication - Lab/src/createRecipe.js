window.onload = function () {
  let form = document.querySelector("form");
  form.addEventListener("submit", CreateRecipe);
};

async function CreateRecipe(event) {
  event.preventDefault();
  let formData = new FormData(event.target);
  let { name, img, ingredients, steps } = Object.fromEntries(
    formData.entries()
  );
  ingredients = ingredients.split("\n");
  steps = steps.split("\n");

  const url = "http://localhost:3030/data/recipes";
  let data = {
    name,
    img,
    ingredients,
    steps,
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": localStorage.getItem("accessToken"),
    },
    body: JSON.stringify(data),
  });

  console.log(response);
}
