function Main(product, amt) {
    let products = ["coffee", "water", "coke", "snacks"];
    let prices = [1.5, 1, 1.4, 2];

    console.log((prices[products.indexOf(product)] * amt).toFixed(2));
}

Main("water", 5)