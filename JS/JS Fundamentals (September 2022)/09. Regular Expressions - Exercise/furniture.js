function Main(Input) {
    let furniture = [];
    let totalPrice = 0;
    let pattern = />>(?<name>[A-Za-z]+)<<(?<price>\d+(.\d+)?)!(?<quantity>\d+)/g;

    while ((valid = pattern.exec(Input)) !== null) {
        furniture.push(valid.groups['name']);
        totalPrice += valid.groups['price'] * valid.groups['quantity'];
    }

    console.log("Bought furniture:");
    furniture.length > 0 ? console.log(furniture.join("\n")) : false;
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}

Main(['>Invalid<<!4', '>Invalid<<!2', '>Invalid<<!5', 'Purchase'])