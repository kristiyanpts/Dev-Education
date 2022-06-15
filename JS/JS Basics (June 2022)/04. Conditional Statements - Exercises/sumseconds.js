function Main(Input) {
    let secondsFirst = Number(Input[0])
    let secondsSecond = Number(Input[1])
    let secondsThird = Number(Input[2])

    let mainSeconds = secondsFirst + secondsSecond + secondsThird

    let minutes = Math.floor(mainSeconds / 60)
    let seconds = mainSeconds % 60

    if (seconds < 10)
    {
        console.log(`${minutes}:0${seconds}`)
    }
    else
    {
        console.log(`${minutes}:${seconds}`)
    }
}

Main(["35",

"45",

"44"])