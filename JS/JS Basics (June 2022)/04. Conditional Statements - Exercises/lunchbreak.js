function Main(Input) {
    let seriesName = Input[0]
    let episodeLength = Number(Input[1])
    let breakLength = Number(Input[2])

    breakLength = breakLength - (breakLength * (1/8)) - (breakLength * (1/4))
    if (breakLength >= episodeLength)
    {
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(breakLength - episodeLength)} minutes free time.`);
    }
    else
    {
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(episodeLength - breakLength)} more minutes.`);
    }
}

Main(["Teen Wolf",

"48",

"60"])