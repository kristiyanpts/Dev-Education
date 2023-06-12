function Main(Input) {
    let moneyForVac = Number(Input[0]);
    let moneyOnHand = Number(Input[1]);
    let i = 2;

    let spendCount = 0;
    let savedDays = 0;
    let hasSpentTooMuch = false;

    while (i < Input.length)
    {
        let type = Input[i];
        let money = Number(Input[i + 1]);

        if (type === "spend")
        {
            moneyOnHand -= money;
            if (moneyOnHand < 0)
            {
                moneyOnHand = 0;
            }
            spendCount++;
        }
        else if (type === "save")
        {
            spendCount = 0;
            moneyOnHand += money;
        }

        savedDays++;

        if (spendCount === 5)
        {
            hasSpentTooMuch = true;
            break;
        }

        i += 2;
    }

    if (hasSpentTooMuch)
    {
        console.log(`You can't save the money.`);
        console.log(savedDays);
    }
    else
    {
        console.log(`You saved the money for ${savedDays} days.`);
    }
}

Main(["250",

"150",

"spend",

"50",

"spend",

"50",

"save",

"100",

"save",

"100"])