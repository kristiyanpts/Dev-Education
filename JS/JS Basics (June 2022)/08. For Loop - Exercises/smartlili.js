function Main(Input) {
    let age = Number(Input[0]);
    let launderPrice = Number(Input[1]);
    let toyPrice = Number(Input[2]);

    let savedMoney = 0;
    let stolenMoney = 0;
    let moneyGets = 10;
    let toysCount = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0)
        {
            savedMoney += moneyGets;
            moneyGets += 10;
            stolenMoney++;
        }
        else
        {
            toysCount++;
        }
    }

    savedMoney += toysCount * toyPrice;

    savedMoney -= stolenMoney * 1;

    if (savedMoney >= launderPrice)
    {
        console.log(`Yes! ${(savedMoney - launderPrice).toFixed(2)}`);
    }
    else
    {
        console.log(`No! ${(launderPrice - savedMoney).toFixed(2)}`);
    }
}

Main(["10",

"170.00",

"6"])