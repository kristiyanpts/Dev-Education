function Main(Input) {
    let i = 0;
    let stepCount = 0;
    while (i < Input.length)
    {
        if (Input[i] !== "Going home")
        {
            stepCount += Number(Input[i]);
        }
        i++;
    }

    if (stepCount >= 10000)
    {
        console.log(`Goal reached! Good job!`);
        console.log(`${stepCount - 10000} steps over the goal!`);
    }
    else
    {
        console.log(`${10000 - stepCount} more steps to reach goal.`);
    }
}

Main(["1500", "3000", "250", "1548", "2000", "Going home", "2000"])