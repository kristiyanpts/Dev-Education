function Main(Input) {
    let number = Number(Input[0]);

    if (number != 0 && number >= -100 && number <= 100)
    {
        console.log("Yes");
    }
    else
    {
        console.log("No");
    }
}

Main(["0"])