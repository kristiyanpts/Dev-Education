function SumTwoNumbers(Input) {
    let startingNumber = Number(Input[0])
    let endingNumber = Number(Input[1])
    let magicNumber = Number(Input[2])

    let hasFoundCombination = false
    let tempBroiProverki = 0

    for (let i = startingNumber; i <= endingNumber; i++) {
        for (let k = startingNumber; k <= endingNumber; k++) {
            tempBroiProverki = tempBroiProverki + 1
            let temp = i + k
            if (temp === magicNumber)
            {
                console.log(`Combination N:${tempBroiProverki} (${i} + ${k} = ${temp})`)
                hasFoundCombination = true
                break
            }
        }
        if (hasFoundCombination)
        {
            break
        }
    }

    if (hasFoundCombination === false)
    {
        console.log(`${tempBroiProverki} combinations - neither equals ${magicNumber}`)
    }
}

SumTwoNumbers(["1",

"10",

"5"])