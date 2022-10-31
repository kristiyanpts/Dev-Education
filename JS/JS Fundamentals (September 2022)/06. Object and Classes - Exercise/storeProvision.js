function Main(currentStock, orderedStock) {
    let products = [];
    for (let i = 0; i < currentStock.length; i+=2) {
        let product = currentStock[i];
        let productQuanity = Number(currentStock[i + 1]);
        let tempProduct = {
            product,
            productQuanity
        }
        products.push(tempProduct)
    }
    for (let i = 0; i < orderedStock.length; i+=2) {
        let isAlreadyInStock = false;
        for (let k = 0; k < products.length; k++) {
            if (products[k].product === orderedStock[i]) {
                products[k].productQuanity = products[k].productQuanity + Number(orderedStock[i + 1]);
                isAlreadyInStock = true;
            }
        }
        if (!isAlreadyInStock) {
            let product = orderedStock[i];
            let productQuanity = Number(orderedStock[i + 1]);
            let tempProduct = {
                product,
                productQuanity
            }
            products.push(tempProduct);
        }
    }
    for (let i = 0; i < products.length; i++) {
        console.log(`${products[i].product} -> ${products[i].productQuanity}`);
    }
}

Main([ 'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5' ], [ 'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30' ])