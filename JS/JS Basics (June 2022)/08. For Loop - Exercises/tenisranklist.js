function Main(GotInput) {
    let NumberOfTourneys = GotInput[0]
    let StartingELO = Number(GotInput[1])
    let Tourneys = {}

    for (let i = 2; i < GotInput.length; i++) {
        Tourneys[i - 2] = GotInput[i]
    }

    let FinalPoints = StartingELO
    let WinsCount = 0

    for (let i = 0; i < NumberOfTourneys; i++) {
        if (Tourneys[i] === "W")
        {
            WinsCount++
            FinalPoints = FinalPoints + 2000
        }
        else if (Tourneys[i] === "F")
        {
            FinalPoints = FinalPoints + 1200
        }
        else if (Tourneys[i] === "SF")
        {
            FinalPoints = FinalPoints +  720
        }
    }

    let AveragePts = (FinalPoints - StartingELO) / NumberOfTourneys
    let WinPercentage = WinsCount * 100 / NumberOfTourneys

    console.log("Final points: " + FinalPoints)
    console.log("Average points: " + Math.floor(AveragePts))
    console.log(WinPercentage.toFixed(2) + "%")
}

Main(["5",

"1400",

"F",

"SF",

"W",

"W",

"SF"])