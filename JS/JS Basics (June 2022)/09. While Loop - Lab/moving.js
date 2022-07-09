function Main(Input) {
    let width = Number(Input[0]);
    let length = Number(Input[1]);
    let height = Number(Input[2]);
    let max = width * length * height;
    let usedSpace = 0;
    let noMoreSpace = false;
    let i = 3;

    while (Input[i] !== "Done")
    {
        let tempSpace = Number(Input[i]);
        usedSpace += tempSpace; 
        if (usedSpace > max)
        {
            noMoreSpace = true;
            break;
        }
        i++;
    }

    if (noMoreSpace)
    {
        console.log(`No more free space! You need ${usedSpace - max} Cubic meters more.`);
    }
    else
    {
        console.log(`${max - usedSpace} Cubic meters left.`);
    }
}

Main(["10",

"10",

"2","20", "20", "20", "20", "122"])