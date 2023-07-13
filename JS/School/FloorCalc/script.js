const prices = {
  "royal-cherry": 18.9,
  "dab-heyloft": 18.99,
  "dab-elegant": 18.99,
  "dab-skydive": 18.99,
  liberty: 20.99,
  buk: 20.99,
  oregon: 22.99,
  bedrock: 25.99,
  traffic: 29.99,
};

let form = document.getElementById("form-calc");
form.addEventListener("submit", calculate);

function calculate(event) {
  event.preventDefault();
  let data = new FormData(event.target);
  let { width, length, type } = Object.fromEntries(data.entries());
  let pricePerMeter = prices[type];
  let roomArea = width * length;
  let priceNoTax = roomArea * pricePerMeter;
  let tax = priceNoTax * 0.2;
  let priceTax = priceNoTax + tax;

  document.getElementById("area").value = roomArea.toFixed(2);
  document.getElementById("price-m").value = pricePerMeter.toFixed(2);
  document.getElementById("price-no-tax").value = priceNoTax.toFixed(2);
  document.getElementById("price-tax").value = priceTax.toFixed(2);
  document.getElementById("tax").value = tax.toFixed(2);
}
