function Main(Input) {
    let product = Input[0];
    let city = Input[1];
    let amount = Number(Input[2]);

    let outputPrice = 0

    if (city === "Sofia")
    {
        if (product === "coffee")
        {
            outputPrice += amount * 0.5
        }
        else if (product === "water")
        {
            outputPrice += amount * 0.8
        }
        else if (product === "beer")
        {
            outputPrice += amount * 1.2
        }
        else if (product === "sweets")
        {
            outputPrice += amount * 1.45
        }
        else if (product === "peanuts")
        {
            outputPrice += amount * 1.6
        }
    }
    else if (city === "Plovdiv")
    {
        if (product === "coffee")
        {
            outputPrice += amount * 0.4
        }
        else if (product === "water")
        {
            outputPrice += amount * 0.7
        }
        else if (product === "beer")
        {
            outputPrice += amount * 1.15
        }
        else if (product === "sweets")
        {
            outputPrice += amount * 1.3
        }
        else if (product === "peanuts")
        {
            outputPrice += amount * 1.5
        }
    }
    else if (city === "Varna")
    {
        if (product === "coffee")
        {
            outputPrice += amount * 0.45
        }
        else if (product === "water")
        {
            outputPrice += amount * 0.7
        }
        else if (product === "beer")
        {
            outputPrice += amount * 1.1
        }
        else if (product === "sweets")
        {
            outputPrice += amount * 1.35
        }
        else if (product === "peanuts")
        {
            outputPrice += amount * 1.55
        }
    }

    console.log(outputPrice);
}

Main(["coffee",

"Varna",

"2"])