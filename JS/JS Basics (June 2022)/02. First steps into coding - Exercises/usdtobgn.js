function Main(Input)
{
    let usdDollars = Number(Input[0])
    let convertedIntoBGN = usdDollars * 1.79549
    console.log(convertedIntoBGN)
}

Main(["12.5"])