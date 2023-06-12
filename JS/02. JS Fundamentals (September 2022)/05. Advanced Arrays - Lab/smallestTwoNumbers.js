function Main(Input) {
    Input = Input.sort((a, b) => a - b);
    console.log(Input[0], Input[1]);
}

Main([30, 15, 50, 5])