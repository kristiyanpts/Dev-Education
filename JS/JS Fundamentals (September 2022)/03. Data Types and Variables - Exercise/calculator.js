function Main(fNum, operator, sNum) {
    switch (operator) {
        case "+":
            console.log((fNum + sNum).toFixed(2));
            break;
        case "-":
            console.log((fNum - sNum).toFixed(2));
            break;
        case "/":
            console.log((fNum / sNum).toFixed(2));
            break;
        case "*":
            console.log((fNum * sNum).toFixed(2));
            break;
        default:
            break;
    }
}