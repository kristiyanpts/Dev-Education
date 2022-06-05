function Main(Input) {
    let yearlyTax = Number(Input[0])

    let basketballShoes = yearlyTax - (yearlyTax * 0.4)
    let basketballOutfits = basketballShoes - (basketballShoes * 0.2)
    let basketBallPrice = basketballOutfits * 0.25
    let basketballAccessoaries = basketBallPrice * 0.2

    let price = basketBallPrice + basketballAccessoaries + basketballOutfits + basketballShoes + yearlyTax

    console.log(price)
}

Main(["365"])