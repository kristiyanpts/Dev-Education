function Main(Input) {
    let days = Number(Input[0]) - 1;
    let type = Input[1];
    let feedback = Input[2];

    let price = 0

    switch (type) {
        case "room for one person":
            price = days * 18;
        break;
        case "apartment":
            price = days * 25;
            if (days < 10)
            {
                price = price - (price * 0.3)
            }
            else if (days >= 10 && days <= 15)
            {
                price = price - (price * 0.35)
            }
            else
            {
                price = price - (price * 0.5)
            }
        break;
        case "president apartment":
            price = days * 35;
            if (days < 10)
            {
                price = price - (price * 0.1)
            }
            else if (days >= 10 && days <= 15)
            {
                price = price - (price * 0.15)
            }
            else
            {
                price = price - (price * 0.2)
            }
        break;
        default:
        break;
    }

    if (feedback === "positive")
    {
        price = price + (price * 0.25)
    }
    else
    {
        price = price - (price * 0.1)
    }

    console.log(price.toFixed(2));
}

Main(["14",

"apartment",

"positive"])