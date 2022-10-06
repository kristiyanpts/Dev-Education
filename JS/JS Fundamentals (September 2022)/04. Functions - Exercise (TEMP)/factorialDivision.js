function Main(fNum, sNum) {
    let fFactorial = 1;
    let sFactorial = 1;

    for (let i = 1; i <= fNum; i++) {
        fFactorial = fFactorial * i;
    }
    for (let i = 1; i <= sNum; i++) {
        sFactorial = sFactorial * i;
    }

    console.log((fFactorial / sFactorial).toFixed(2));
}

Main(6, 2)