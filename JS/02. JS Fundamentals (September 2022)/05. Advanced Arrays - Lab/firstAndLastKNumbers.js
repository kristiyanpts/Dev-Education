function Main(Input) {
    let k = Number(Input[0]);
    let fOutput = [];
    let sOutput = [];

    for (let i = 1; i <= k; i++) {
        fOutput.push(Input[i]);
    }

    for (let i = Input.length - k; i < Input.length; i++) {
        sOutput.push(Input[i]);
    }

    console.log(fOutput.join(" "));
    console.log(sOutput.join(" "));
}

Main([3, 6, 7, 8, 9])