function Main(Input) {
    let budget = Number(Input[0])
    let statistiCount = Number(Input[1])
    let moneyForOneOutfit = Number(Input[2])

    let decorePrice = budget * 0.1
    let outfitPrice = statistiCount * moneyForOneOutfit

    if (statistiCount > 150)
    {
        outfitPrice = outfitPrice - (outfitPrice * 0.1)
    }

    let finalPrice = decorePrice + outfitPrice

    if (budget < finalPrice)
    {
        console.log("Not enough money!")
        console.log(`Wingard needs ${(finalPrice - budget).toFixed(2)} leva more.`);
    }
    else 
    {
        console.log("Action!")
        console.log(`Wingard starts filming with ${(budget - finalPrice).toFixed(2)} leva left.`);
    }
}

Main(["15437.62",

"186",

"57.99"])