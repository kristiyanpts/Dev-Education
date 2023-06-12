function Main(Input)
{
    let daysCount = Number(Input[0]);
    let totalLiters = 0;
    let totalDegress = 0;

    for (let i = 1; i < Input.length; i += 2) {
        let liters = Number(Input[i]);
        let degrees = Number(Input[i + 1]);

        totalLiters += liters;
        totalDegress += liters * degrees;
    }

    let finalDegree = totalDegress / totalLiters;
    console.log(`Liter: ${totalLiters.toFixed(2)}`);
    console.log(`Degrees: ${finalDegree.toFixed(2)}`);
    
    if (finalDegree < 38)
    {
        console.log("Not good, you should baking!");
    }
    else if (finalDegree >= 38 && finalDegree <= 42)
    {
        console.log("Super!");
    }
    else if (finalDegree > 42)
    {
        console.log("Dilution with distilled water!");
    }
}

Main(["3",
"100",
"45",
"50",
"55",
"150",
"36"])