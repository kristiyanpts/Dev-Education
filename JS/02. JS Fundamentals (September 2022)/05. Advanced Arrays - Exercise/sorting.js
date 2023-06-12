function Main(Input) {
    let result = [];
    Input = Input.sort((a, b) => a - b);
    while (Input.length !== 0) {
        result.push(Input[Input.length - 1]) && Input.pop();
        result.push(Input[0]) && Input.shift();
    }
    console.log(result.join(" "));
}

Main([-10, -20, -30, -40, -50, -50, -50, -50, -50])