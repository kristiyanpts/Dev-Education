function Main(Input) {
    let n = Number(Input[0]);
    let current = 1;
    let output = "";
    let isBigger = false;
    for (let rows = 1; rows <= n; rows++) {   
        for (let cols = 1; cols <= rows; cols++) {
            if (current > n)
            {
                isBigger = true;
                break;
            }
            output += current + " ";
            current++;
        } 
        console.log(output);
        output = "";
        if (isBigger)
        {
            break;
        }
    }
}

Main(["1"])