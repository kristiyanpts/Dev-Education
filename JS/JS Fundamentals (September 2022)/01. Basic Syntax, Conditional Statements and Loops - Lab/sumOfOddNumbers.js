function Main(n) {
    let sum = 0;
    let printedNumbers = 0;

    for (let i = 0; i <= Infinity; i++) {
        if (i % 2 !== 0) {
            console.log(i);
            sum += i;
            printedNumbers++;
            if (printedNumbers == n) {
                break;
            }
        }
    }

    console.log(`Sum: ${sum}`);
}

Main(5)