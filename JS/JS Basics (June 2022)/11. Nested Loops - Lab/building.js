function Floors(Input) {
    let floors = Number(Input[0])
    let rooms = Number(Input[1])

    for (let f = floors; f >= 1; f--) {
        let output = ""
        for (let r = 0; r < rooms; r++) {
            if (f === floors)
            {
                output += `L${f}${r}` + " "
            }
            else if (f % 2 === 1)
            {
                output += `A${f}${r}` + " "
            }
            else if(f % 2 === 0)
            {
                output += `O${f}${r}` + " "
            }
        }
        console.log(output)
    }
}

Floors(["6",

"4"])