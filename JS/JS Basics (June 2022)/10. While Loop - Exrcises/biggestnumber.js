function Main(Input) {
    let i = 0;
    let biggestNumber = Number(Input[i]);

    while (Input[i] !== "Stop") {
        let tempNum = Number(Input[i]);
        if (tempNum > biggestNumber)
        {
            biggestNumber = tempNum;
        }
        i++;
    }

    console.log(biggestNumber);
}

Main(["-10", "20", "-30", "Stop"])