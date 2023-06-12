function Main(Input) {
    let output = [];

    for (let i = 0; i < Input.length; i++) {
        if (i % 2 !== 0) {
            output.push(Input[i] * 2);
        }
    }

    output = output.reverse();
    console.log(output.join(" "));
}

Main([10, 15, 20, 25])