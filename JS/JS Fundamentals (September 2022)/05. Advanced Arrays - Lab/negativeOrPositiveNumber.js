function Main(Input) {
    let output = [];
    for (let i = 0; i < Input.length; i++) {
        if (Input[i] < 0) {
            output.unshift(Input[i]);
        } else {
            output.push(Input[i]);
        }
    }
    console.log(output.join("\n"));
}

Main(['3', '-2', '0', '-1'])