function Main(Input) {
    let n1 = Number(Input[0]);
    let n2 = Number(Input[1]);
    let operator = Input[2];

    

    if (operator === "+")
    {
        console.log(`${n1} ${operator} ${n2} = ${n1 + n2} - ${(n1 + n2) % 2 === 0 ? "even" : "odd"}`);
    }
    else if (operator === "-")
    {
        console.log(`${n1} ${operator} ${n2} = ${n1 - n2} - ${(n1 - n2) % 2 === 0 ? "even" : "odd"}`);
    }
    else if (operator === "*")
    {
        console.log(`${n1} ${operator} ${n2} = ${n1 * n2} - ${(n1 * n2) % 2 === 0 ? "even" : "odd"}`);   
    }
    else if (operator === "/")
    {
        if (n2 !== 0)
        {
            console.log(`${n1} ${operator} ${n2} = ${(n1 / n2).toFixed(2)}`);
        }
        else
        {
            console.log(`Cannot divide ${n1} by zero`);
        }
    }
    else if (operator === "%")
    {
        if (n2 !== 0)
        {
            console.log(`${n1} ${operator} ${n2} = ${n1 % n2}`);
        }
        else
        {
            console.log(`Cannot divide ${n1} by zero`);
        }
    }
}

Main(["112", "0", "/"])