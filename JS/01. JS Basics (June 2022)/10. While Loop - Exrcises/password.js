function Main(Input) {
    let username = Input[0];
    let pass = Input[1];
    let i = 2;

    while (Input[i] !== pass)
    {
        i++;
    }
    console.log(`Welcome ${username}!`);
}

Main(["Gosho", "secret", "secret"])