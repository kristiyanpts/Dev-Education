function Main(Input) {
    let price = Number(Input[0])
    let puzzles = Number(Input[1])
    let dolls = Number(Input[2])
    let teddyBears = Number(Input[3])
    let minions = Number(Input[4])
    let trucks = Number(Input[5])

    let totalToys = puzzles + dolls + teddyBears + minions + trucks
    let income = (puzzles * 2.6) + (dolls * 3) + (teddyBears * 4.1) + (minions * 8.2) + (trucks * 2)

    if (totalToys >= 50)
    {
        income = income - (income * 0.25)
    }

    income = income - (income * 0.1)

    if (income >= price)
    {
        console.log(`Yes! ${(income - price).toFixed(2)} lv left.`)
    }
    else
    {
        console.log(`Not enough money! ${(price - income).toFixed(2)} lv needed.`)
    }
}

Main(["320", "8", "2", "5", "5", "1"])