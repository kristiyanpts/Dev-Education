function solve() {
  let addButtons = Array.from(document.querySelectorAll(".add-product"));
  let products = Array.from(document.querySelectorAll(".product-title"));
  let prices = Array.from(document.querySelectorAll(".product-line-price"));
  let textarea = document.getElementsByTagName("textarea")[0];
  let checkout = document.getElementsByClassName("checkout")[0];
  let productsBought = [];
  let totalPrice = 0;

  for (let i = 0; i < addButtons.length; i++) {
    let button = addButtons[i];
    button.addEventListener("click", (event) => {
      let prodPrice = Number(prices[i].textContent);
      let prodName = products[i].textContent;
      totalPrice += prodPrice;
      productsBought.includes(prodName) === false
        ? productsBought.push(prodName)
        : "";

      textarea.innerHTML += `Added ${prodName} for ${prodPrice.toFixed(
        2
      )} to the cart.\n`;
    });
  }

  checkout.addEventListener("click", () => {
    textarea.innerHTML += `You bought ${productsBought.join(
      ", "
    )} for ${totalPrice.toFixed(2)}.`;

    for (const button of addButtons) {
      button.disabled = true;
    }
    checkout.disabled = true;
  });
}
