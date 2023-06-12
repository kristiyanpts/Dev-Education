function Main(fNum, sNum, operator) {
    switch (operator) {
        case "add":
            console.log(fNum + sNum);
            break;
        case "subtract":
            console.log(fNum - sNum);
            break;
        case "divide":
            console.log(fNum / sNum);
            break;
        case "multiply":
            console.log(fNum * sNum);
            break;
        default:
            break;
    }
}

Main(50, 5, 'multiply')