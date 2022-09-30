function Main(number) {
    let sNumber = number.toString();
    let sum = 0;

    for (let i = 0; i < sNumber.length; i++) {
        sum += Number(sNumber[i]);
    }

    sum = sum.toString();
    let output = "";
    
    sum.includes("9") ? output = sNumber + " Amazing? True" : output = sNumber + " Amazing? False"

    console.log(output);
}

Main(999)