function Main(Input) {
    let budget = Number(Input[0])
    let gpus = Number(Input[1])
    let cpus = Number(Input[2])
    let rams = Number(Input[3])

    let price = 0
    let gpuPrice = gpus * 250
    price += gpuPrice
    price += cpus * (gpuPrice * 0.35)
    price += rams * (gpuPrice * 0.1)
    if (gpus > cpus)
    {
        price -= price * 0.15
    }

    if (budget >= price)
    {
        console.log(`You have ${(budget - price).toFixed(2)} leva left!`);
    }
    else
    {
        console.log(`Not enough money! You need ${(price - budget).toFixed(2)} leva more!`);
    }
}

Main(["920.45",

"3",

"1",

"1"])