function Main(Input) {
    let i = 0;
    let totalPrice = 0;
    let totalPriceWithoutTaxes = 0;
    let taxes = 0;
    let typeOfCustomer = Input[Input.length - 1];

    while (Input[i] !== "special" && Input[i] !== "regular") {
        let tempPrice = Number(Input[i]);

        if (tempPrice < 0) {
            console.log("Invalid price!");
        } else {
            totalPrice += tempPrice + (tempPrice * 0.2);
            totalPriceWithoutTaxes += tempPrice;
            taxes += (tempPrice * 0.2);
        }
        
        i++;
    }

    if (typeOfCustomer == "special") {
        totalPrice -= (totalPrice * 0.1);
    }

    if (totalPrice === 0) {
        console.log("Invalid order!");
    } else {
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${totalPriceWithoutTaxes.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log("-----------");
        console.log(`Total price: ${totalPrice.toFixed(2)}$`);
    }
}

Main([
    'regular'
    ])
    
        
    