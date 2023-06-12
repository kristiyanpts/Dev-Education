function Main() {
    for (let i = 1; i <= 100; i++) {
        let stringedTemp = i.toString();
        let tempSum = 0;
        for (let i = 0; i < stringedTemp.length; i++) {
            tempSum += Number(stringedTemp[i]);
        }
        if (tempSum % 3 === 0) {
            console.log(i);
        }
    }
}

Main();