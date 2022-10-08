function Main(Input) {
    let products = Input[0].split("!");

    let i = 1;
    while (Input[i] !== "Go Shopping!") {
        let command = Input[i].split(" ")[0];
        let product = Input[i].split(" ")[1];

        switch (command) {
            case "Urgent":
                if (!products.includes(product)) {
                    products.unshift(product);
                }
                break;
            case "Unnecessary":
                if (products.includes(product)) {
                    products.splice(products.indexOf(product), 1);
                }
                break;
            case "Correct":
                let newProduct = Input[i].split(" ")[2];
                if (products.includes(product)) {
                    products[products.indexOf(product)] = newProduct;
                }
                break;
            case "Rearrange":
                if (products.includes(product)) {
                    let index = products.indexOf(product);
                    products.splice(index, 1);
                    products.push(product);
                }
                break;
            default:
                break;
        }

        i++;
    }

    console.log(products.join(", "));
}

Main(["Milk!Pepper!Salt!Water!Banana",

"Urgent Salt",

"Unnecessary Grapes",

"Correct Pepper Onion","Rearrange Grapes", "Correct Tomatoes Potatoes", "Go Shopping!"])