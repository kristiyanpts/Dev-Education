function Main(Input) {
    let pens = Number(Input[0])
    let markers = Number(Input[1])
    let detergentLiters = Number(Input[2])
    let percentOff = Number(Input[3])

    let price = ((pens * 5.8) + (markers * 7.2) + (detergentLiters * 1.2))
    let priceAfterDiscount = price - (price * (percentOff / 100))

    console.log(priceAfterDiscount)
}

Main(["2", "3", "4", "25"])