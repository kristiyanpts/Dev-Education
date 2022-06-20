function Main(Input) {
    let age = Number(Input[0]);
    let sex = Input[1];

    if (age < 16)
    {
        if (sex == "m")
        {
            console.log("Master");
        }
        else
        {
            console.log("Miss");
        }
    }
    else
    {
        if (sex == "m")
        {
            console.log("Mr.");
        }
        else
        {
            console.log("Ms.");
        }
    }
}

Main(["12",

"f"])