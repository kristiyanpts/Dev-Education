function solve() {
  let buttons = document.getElementsByTagName("button");
  let textarea = document.getElementsByTagName("textarea");
  let tbody = document.querySelector(".table tbody");
  let inputs = document.getElementsByTagName("input");
  buttons[0].addEventListener("click", AddProduct);
  buttons[1].addEventListener("click", BuyProducts);

  function AddProduct() {
    let productsNew = JSON.parse(textarea[0].value);
    for (const product of productsNew) {
      console.log(product);
      let tr = document.createElement("tr");
      tr.innerHTML = `
      <td><img src = ${product.img}></td>
      <td><p>${product.name}</p></td>
      <td><p>${product.price}</p></td>
      <td><p>${product.decFactor}</p></td>
      <td><input type="checkbox"/></td>
      `;
      tbody.appendChild(tr);
      inputs = document.getElementsByTagName("input");
    }
  }

  function BuyProducts() {
    let productsBought = [];
    let moneySpent = 0;
    let avgFactor = 0;
    for (let i = 0; i < inputs.length; i++) {
      let parent = inputs[i].parentElement.parentElement;
      if (inputs[i].checked) {
        console.log(parent);
        productsBought.push(parent.children[1].innerText);
        moneySpent += Number(parent.children[2].innerText);
        avgFactor += Number(parent.children[3].innerText);
      }
    }
    textarea[1].innerHTML += `Bought furniture: ${productsBought.join(", ")}\n`;
    textarea[1].innerHTML += `Total price: ${moneySpent.toFixed(2)}\n`;
    textarea[1].innerHTML += `Average decoration factor: ${
      avgFactor / productsBought.length
    }`;
  }
}
