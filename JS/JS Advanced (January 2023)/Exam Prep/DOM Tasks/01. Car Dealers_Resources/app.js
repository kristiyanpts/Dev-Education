window.addEventListener("load", solve);

function solve() {
  let inputFields = Array.from(document.getElementsByTagName("input"));
  let fuel = document.getElementById("fuel");
  let publishButton = document.getElementById("publish");
  let tbody = document.getElementById("table-body");
  let carList = document.getElementById("cars-list");
  let profitText = document.getElementById("profit");
  let profit = 0;

  publishButton.addEventListener("click", PublishCar);

  function PublishCar(e) {
    // e.preventDefault();
    let [make, model, year, originalCost, sellingPrice] = inputFields.map(
      (e) => `${e.value}`
    );
    let selectedFuel = fuel.selectedIndex;
    originalCost = Number(originalCost);
    sellingPrice = Number(sellingPrice);

    if (
      make == "" ||
      model == "" ||
      year == "" ||
      originalCost == "" ||
      sellingPrice == "" ||
      originalCost > sellingPrice
    ) {
      return;
    }

    let tr = document.createElement("tr");
    tr.setAttribute("class", "row");
    tr.innerHTML = `<td>${make}</td><td>${model}</td><td>${year}</td><td>${
      fuel.options[fuel.selectedIndex].value
    }</td><td>${originalCost}</td><td>${sellingPrice}</td>`;
    let tdButtons = document.createElement("td");
    let buttonEdit = document.createElement("button");
    buttonEdit.setAttribute("class", "action-btn edit");
    buttonEdit.textContent = "Edit";
    let buttonSell = document.createElement("button");
    buttonSell.setAttribute("class", "action-btn sell");
    buttonSell.textContent = "Sell";

    buttonEdit.addEventListener("click", EditCar);
    buttonSell.addEventListener("click", SellCar);

    tdButtons.appendChild(buttonEdit);
    tdButtons.appendChild(buttonSell);

    tr.appendChild(tdButtons);
    tbody.appendChild(tr);

    for (let i = 0; i < inputFields.length; i++) {
      inputFields[i].value = "";
    }
    fuel.selectedIndex = -1;

    function EditCar() {
      let inputInfo = [make, model, year, originalCost, sellingPrice];
      for (let i = 0; i < inputFields.length; i++) {
        inputFields[i].value = inputInfo[i];
      }
      fuel.selectedIndex = selectedFuel;

      tr.remove();
    }

    function SellCar() {
      tr.remove();

      let li = document.createElement("li");
      li.setAttribute("class", "each-list");
      li.innerHTML = `<span>${make} ${model}</span><span>${year}</span><span>${
        sellingPrice - originalCost
      }</span>`;
      carList.appendChild(li);
      profit += sellingPrice - originalCost;
      profitText.textContent = profit.toFixed(2);
    }
  }
}
