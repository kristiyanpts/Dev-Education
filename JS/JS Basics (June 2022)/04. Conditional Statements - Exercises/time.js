function Main(Input) {
    let hour = Number(Input[0])
    let minutes = Number(Input[1])

    let time = hour * 60 + minutes + 15

    let outputHours =  Math.floor(time / 60)
    let outputMins = time % 60

    if (outputHours > 23)
    {
        outputHours = 0
    }

    if (outputMins < 10)
    {
        console.log(`${Math.floor(outputHours)}:0${outputMins}`)
    }
    else
    {
        console.log(`${Math.floor(outputHours)}:${outputMins}`)
    }
}

Main(["1",

"46"])