window.addEventListener("load", solve);

function solve() {
  let inputFields = Array.from(document.getElementsByTagName("input"));
  let description = document.getElementById("description");
  let productType = document.getElementById("type-product");
  let [buttonSend, buttonClear] = Array.from(
    document.getElementsByTagName("button")
  );
  let receivedOrders = document.getElementById("received-orders");
  let completedOrders = document.getElementById("completed-orders");
  buttonSend.addEventListener("click", SendOrder);
  buttonClear.addEventListener("click", ClearOrders);

  function SendOrder(e) {
    e.preventDefault();
    let [name, phone] = inputFields.map((e) => `${e.value}`);

    if (name == "" || phone == "" || description.value == "") {
      return;
    }

    let div = document.createElement("div");
    div.setAttribute("class", "container");
    div.innerHTML = `<h2>Product type for repair: ${
      productType.options[productType.selectedIndex].value
    }</h2><h3>Client information: ${name}, ${phone}</h3><h4>Description of the problem: ${
      description.value
    }</h4>`;
    let buttonStart = document.createElement("button");
    buttonStart.setAttribute("class", "start-btn");
    buttonStart.textContent = "Start repair";
    let buttonFinish = document.createElement("button");
    buttonFinish.setAttribute("class", "finish-btn");
    buttonFinish.textContent = "Finish repair";
    buttonFinish.disabled = true;
    buttonStart.addEventListener("click", StartRepair);
    buttonFinish.addEventListener("click", FinishRepair);
    div.appendChild(buttonStart);
    div.appendChild(buttonFinish);
    receivedOrders.appendChild(div);

    for (let i = 0; i < inputFields.length; i++) {
      inputFields[i].value = "";
    }
    description.value = "";

    function StartRepair() {
      buttonStart.disabled = true;
      buttonFinish.disabled = false;
    }

    function FinishRepair() {
      buttonStart.remove();
      buttonFinish.remove();
      completedOrders.appendChild(div);
    }
  }

  function ClearOrders() {
    let completedTasks = Array.from(
      document.getElementsByClassName("container")
    );
    for (const completedTask of completedTasks) {
      if (completedTask.parentElement.id == "completed-orders") {
        completedTask.remove();
      }
    }
  }
}
