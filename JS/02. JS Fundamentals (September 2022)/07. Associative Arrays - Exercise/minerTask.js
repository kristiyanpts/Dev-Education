function Main(Input) {
    let resources = {};

    while (Input.length > 0) {
        let material = Input.shift();
        let amount = Number(Input.shift());

        if (resources.hasOwnProperty(material)) {
            resources[material] += amount;
        } else {
            resources[material] = amount;
        }
    }

    for (const [material, amount] of Object.entries(resources)) {
        console.log(`${material} -> ${amount}`);
    }
}

Main([ 'gold', '155', 'silver', '10', 'copper', '17', 'gold', '15' ])