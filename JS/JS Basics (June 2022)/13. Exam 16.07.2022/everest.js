function Main(Input)
{
    let i = 0;
    let totalDays = 1;
    let hasConcurredEverest = false;
    let currentMeters = 5364;

    while (Input[i] !== "END")
    {
        let isGoingToSleed = Input[i];
        i++;
        let metersConcurred = Number(Input[i]);
        i++;
        if (totalDays > 5)
        {
            break;
        }
        if (isGoingToSleed === "Yes")
        {
            totalDays++;
            if (totalDays > 5)
            {
                break;
            }
            currentMeters += metersConcurred;
        }
        else
        {
            currentMeters += metersConcurred;
        }
        if (currentMeters >= 8848)
        {
            hasConcurredEverest = true;
            break;
        }
    }

    if (hasConcurredEverest)
    {
        console.log(`Goal reached for ${totalDays} days!`);
    }
    else
    {
        console.log("Failed!");
        console.log(currentMeters);
    }
}

Main(["Yes",
"535",
"Yes",
"849",
"Yes",
"499",
"Yes",
"400",
"Yes",
"500"])