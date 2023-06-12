function Main(Input) {
    let number = Number(Input[0]);
    let i = 1;

    let sum = Number(Input[i]);

    while (sum < number)
    {
        i++;
        sum += Number(Input[i]);
    }
    console.log(`${sum}`);
}

Main(["20", "1", "2", "3", "4", "5", "6"])