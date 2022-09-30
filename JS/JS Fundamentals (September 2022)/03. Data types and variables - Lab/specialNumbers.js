function Main(n) {
    for (let i = 1; i <= n; i++) {
        let tempSum = 0;
        let tempNum = i.toString();

        for (let k = 0; k < tempNum.length; k++) {
            tempSum += Number(tempNum[k])
        }

        if (tempSum === 5 || tempSum === 7 || tempSum === 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }
}

Main(15)