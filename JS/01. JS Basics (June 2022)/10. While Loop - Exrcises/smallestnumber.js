function Main(Input) {
    let i = 0;
    let smallestNumber = Number(Input[i]);

    while (Input[i] !== "Stop") {
        let tempNum = Number(Input[i]);
        if (tempNum < smallestNumber)
        {
            smallestNumber = tempNum;
        }
        i++;
    }

    console.log(smallestNumber);
}

Main(["100",

"99",

"80",

"70",

"Stop"])