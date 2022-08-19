function Main(Input)
{
    let cpuPrice = Number(Input[0]);
    let gpuPrice = Number(Input[1]);
    let ramPrice = Number(Input[2]);
    let ramQnt = Number(Input[3]);
    let discount = Number(Input[4]);

    let totalPrice = ((cpuPrice * 1.57) - (cpuPrice * 1.57) * discount) + ((gpuPrice * 1.57) - (gpuPrice * 1.57) * discount) + ((ramPrice * 1.57) * ramQnt);

    console.log(`Money needed - ${totalPrice.toFixed(2)} leva.`);
}

Main(["200",
"100",
"80",
"1",
"0.01"])
