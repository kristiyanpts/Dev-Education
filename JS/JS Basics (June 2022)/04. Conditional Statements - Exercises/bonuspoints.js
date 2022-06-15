function Main(Input) {
    let number = Number(Input[0])
    let bonusPoints = 0

    if (number <= 100)
    {
        bonusPoints += 5
    }
    else if (number > 100 && number <= 1000)
    {
        bonusPoints += number * 0.20
    }
    else if (number > 1000)
    {
        bonusPoints += number * 0.10
    }

    if (number % 2 === 0)
    {
        bonusPoints += 1
    }
    if (number % 10 === 5)
    {
        bonusPoints += 2
    }

    console.log(bonusPoints)
    console.log(number + bonusPoints)
}

Main(["20"])