function Main(Input) {
    let number = Input[0]

    if (number % 2 === 0)
    {
        console.log("even")
    }
    else if (number % 2 != 0)
    {
        console.log("odd")
    }
}

Main(["-1"])