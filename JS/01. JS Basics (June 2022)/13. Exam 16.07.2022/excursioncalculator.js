function Main(Input)
{
    let peopleAmt = Number(Input[0]);
    let season = Input[1];
    let totalPrice = 0;

    switch (season) {
        case "spring":
            if (peopleAmt <= 5)
            {
                totalPrice = peopleAmt * 50;
            }
            else
            {
                totalPrice = peopleAmt * 48;
            }
            break;
        case "summer":
            if (peopleAmt <= 5)
            {
                totalPrice = peopleAmt * 48.5;
            }
            else
            {
                totalPrice = peopleAmt * 45;
            }
            break;
        case "autumn":
            if (peopleAmt <= 5)
            {
                totalPrice = peopleAmt * 60;
            }
            else
            {
                totalPrice = peopleAmt * 49.5;
            }
            break;
        case "winter":
            if (peopleAmt <= 5)
            {
                totalPrice = peopleAmt * 86;
            }
            else
            {
                totalPrice = peopleAmt * 85;
            }
            break;
        default:
            break;
    }

    if (season === "summer")
    {
        totalPrice -= totalPrice * 0.15;
    }
    else if (season === "winter")
    {
        totalPrice += totalPrice * 0.08;
    }

    console.log(`${totalPrice.toFixed(2)} leva.`);
}

Main(["20",
"winter"])