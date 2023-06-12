function Main(Input) {
    let i = 0;
    let balance = 0;

    while (Input[i] !== "NoMoreMoney") {
        let tempNumber = Number(Input[i]);
        if (tempNumber > 0)
        {
            console.log(`Increase: ${tempNumber.toFixed(2)}`);
            balance += tempNumber;
            i++;
        }
        else
        {
            console.log(`Invalid operation!`);
            break;
        }
    }

    console.log(`Total: ${balance.toFixed(2)}`);
}

Main(["120", "45.55", "-150"])