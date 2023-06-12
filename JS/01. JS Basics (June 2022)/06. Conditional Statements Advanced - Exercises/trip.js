function Main(Input) {
    let budget = Number(Input[0]);
    let season = Input[1];

    let destination = ""
    let stayingIn = ""
    let spentMoney = 0

    if (budget <= 100)
    {
        destination = "Bulgaria"
        if (season === "summer")
        {
            stayingIn = "Camp"
            spentMoney = budget * 0.3
        }
        else if (season === "winter")
        {
            stayingIn = "Hotel"
            spentMoney = budget * 0.7
        }
    }
    else if (budget > 100 && budget <= 1000)
    {
        destination = "Balkans"
        if (season === "summer")
        {
            stayingIn = "Camp"
            spentMoney = budget * 0.4
        }
        else if (season === "winter")
        {
            stayingIn = "Hotel"
            spentMoney = budget * 0.8
        }
    }
    else
    {
        destination = "Europe"
        stayingIn = "Hotel"
        spentMoney = budget * 0.9
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${stayingIn} - ${spentMoney.toFixed(2)}`);
}

Main(["75", "winter"])