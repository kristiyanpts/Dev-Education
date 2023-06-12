function Main(Input) {
    let number = Number(Input[0]);

    for (let i = 1; i <= 10; i++) {
        console.log(`${i} * ${number} = ${i * number}`);
    }
}

Main(["5"])