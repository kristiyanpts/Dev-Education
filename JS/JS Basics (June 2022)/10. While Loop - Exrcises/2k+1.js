function Main(Input) {
    let number = Number(Input[0]);
    let i = 1;

    let sum = 1;

    while (number >= sum) {
        console.log(sum);
        sum = sum * 2 + 1;
    }
}

Main(["17"])