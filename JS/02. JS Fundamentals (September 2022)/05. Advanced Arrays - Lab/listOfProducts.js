function Main(Input) {
    Input = Input.sort();

    for (let i = 0; i < Input.length; i++) {
        console.log(`${i + 1}.${Input[i]}`);
    }
}

Main(['Potatoes', 'Tomatoes', 'Onions',

'Apples'])