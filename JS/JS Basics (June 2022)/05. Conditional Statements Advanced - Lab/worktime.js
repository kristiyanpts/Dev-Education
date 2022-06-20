function Main(Input) {
    let hour = Number(Input[0]);
    let day = Input[1];

    if (dayOfTheWeek === "Sunday" || hour < 10 || hour > 18)
    {
        console.log("closed");
    }
    else
    {
        console.log("open");
    }
}

Main(["19", "Friday"])