function Main(Input) {
    let figure = Input[0]

    if (figure === "square")
    {
        let side = Input[1]
        console.log((side * side).toFixed(3))
    }
    else if (figure === "rectangle")
    {
        let a = Input[1]
        let b = Input[2]
        console.log((a * b).toFixed(3))
    }
    else if (figure === "circle")
    {
        let radius = Input[1]
        console.log((Math.PI * (radius * radius)).toFixed(3))
    }
    else if (figure === "triangle")
    {
        let a = Input[1]
        let h = Input[2]
        console.log((1/2 * a * h).toFixed(3))
    }
}

Main(["rectangle", "7", "2.5"])