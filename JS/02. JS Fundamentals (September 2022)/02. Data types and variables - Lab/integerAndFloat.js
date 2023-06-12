function Main(fNum, sNum, tNum) {
    let sum = fNum + sNum + tNum;

    sum % 1 === 0 ? sum += ' - Integer' : sum += ' - Float';

    console.log(sum);
}

Main(9, 100, 1.1)