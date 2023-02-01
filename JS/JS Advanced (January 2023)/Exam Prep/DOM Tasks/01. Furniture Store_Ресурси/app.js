window.addEventListener("load", solve);

function solve() {
  let inputFields = Array.from(document.getElementsByTagName("input"));
  let description = document.getElementById("description");
  let buttonAdd = document.getElementById("add");
  let tbody = document.getElementById("furniture-list");
  let priceText = document.getElementsByClassName("total-price")[0];
  let totalPrice = 0;

  buttonAdd.addEventListener("click", AddFurniture);

  function AddFurniture(e) {
    e.preventDefault();
    let [model, year, price] = inputFields.map((e) => `${e.value}`);
    year = Number(year);
    price = Number(price);

    if (model == "" || description.value == "" || year <= 0 || price <= 0) {
      return;
    }

    let trInfo = document.createElement("tr");
    trInfo.setAttribute("class", "info");
    console.log(price);
    trInfo.innerHTML = `<td>${model}</td><td>${price.toFixed(2)}</td>`;
    let tdButtons = document.createElement("td");
    let buttonMore = document.createElement("button");
    buttonMore.setAttribute("class", "moreBtn");
    buttonMore.textContent = "More Info";
    let buttonBuy = document.createElement("button");
    buttonBuy.setAttribute("class", "buyBtn");
    buttonBuy.textContent = "Buy it";
    buttonMore.addEventListener("click", ShowMore);
    buttonBuy.addEventListener("click", BuyFurniture);
    tdButtons.appendChild(buttonMore);
    tdButtons.appendChild(buttonBuy);
    trInfo.appendChild(tdButtons);
    let trMoreInfo = document.createElement("tr");
    trMoreInfo.setAttribute("class", "hide");
    trMoreInfo.innerHTML = `<td>Year: ${year}</td><td colspan="3">Description: ${description.value}</td>`;
    tbody.appendChild(trInfo);
    tbody.appendChild(trMoreInfo);

    for (let i = 0; i < inputFields.length; i++) {
      inputFields[i].value = "";
    }
    description.value = "";

    function ShowMore() {
      if (buttonMore.textContent == "More Info") {
        buttonMore.textContent = "Less Info";
        trMoreInfo.style.display = "contents";
      } else {
        buttonMore.textContent = "More Info";
        trMoreInfo.style.display = "none";
      }
    }

    function BuyFurniture() {
      trInfo.remove();
      trMoreInfo.remove();
      totalPrice += price;
      priceText.textContent = totalPrice.toFixed(2);
    }
  }
}
