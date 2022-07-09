function Generate(Input) {
    let number = Number(Input[0])

    let resheniqBroi = 0

    for (let x1 = 0; x1 <= number; x1++) {
        for (let x2 = 0; x2 <= number; x2++) {
            for (let x3 = 0; x3 <= number; x3++) {
                let temp = x1 + x2 + x3
                if (temp === number)
                {
                    resheniqBroi++
                }
            }
        }
    }

    console.log(resheniqBroi)
}

Generate(["25"]);