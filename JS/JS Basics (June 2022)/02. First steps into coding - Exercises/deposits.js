function Main(Input) {
    let deposit = Number(Input[0])
    let depositEndDate = Number(Input[1])
    let yearlyLawn = Number(Input[2])

    let finalSum = deposit + depositEndDate * ((deposit * yearlyLawn / 100) / 12)

    console.log(finalSum)
}

Main(["200", "3", "5.7"])