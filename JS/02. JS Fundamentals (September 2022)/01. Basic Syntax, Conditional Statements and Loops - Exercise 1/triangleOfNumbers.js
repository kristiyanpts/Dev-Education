function Main(n) {
    for (let i = 1; i <= n; i++) {
        let tempOutput = "";
        for (let k = 0; k < i; k++) {
            tempOutput += i + " ";
        }
        console.log(tempOutput);
    }
}

Main(3)