function Main(Input) {
    let chickenMenus = Number(Input[0])
    let fishMenus = Number(Input[1])
    let veggieMenus = Number(Input[2])

    let price = ((chickenMenus * 10.35) + (fishMenus * 12.4) + (veggieMenus * 8.15))
    price = price + (price * 0.2 + 2.5)

    console.log(price)
}

Main(["2", "4", "3"])