function Main(Input) {
    let length = Number(Input[0])
    let width = Number(Input[1])
    let height = Number(Input[2])
    let percent = Number(Input[3])

    let tankArea = length * width * height
    let obemLitri = tankArea / 1000
    let neededLiters = obemLitri * (1 - (percent / 100))

    console.log(neededLiters)
}

Main(["85", "75", "47", "17"])