function Main(Input) {
    let firstNumber = Input[0]
    let secondNumber = Input[1]

    if (firstNumber > secondNumber)
    {
        console.log(firstNumber)
    }
    else if (secondNumber > firstNumber)
    {
        console.log(secondNumber)
    }
    else if (firstNumber === secondNumber)
    {
        console.log(firstNumber)
    }
}

Main(["10", "10"])