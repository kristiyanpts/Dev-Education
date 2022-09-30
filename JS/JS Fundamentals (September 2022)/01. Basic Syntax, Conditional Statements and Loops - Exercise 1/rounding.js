function Main(number, rounding) {
    if (rounding > 15) {
        rounding = 15
    }
    console.log(parseFloat(number.toFixed(rounding)));
}

Main(3.144444, 3)