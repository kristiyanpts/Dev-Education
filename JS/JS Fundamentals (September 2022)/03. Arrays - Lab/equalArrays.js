function Main(fArr, sArr) {
    let areIdentical = true;
    let indexDiff = 0;
    let sum = 0;

    for (let i = 0; i < fArr.length; i++) {
        sum += Number(fArr[i]);
        if (fArr[i] != sArr[i]) {
            areIdentical = false;
            indexDiff = i;
            break;
        }
    }

    areIdentical ? console.log(`Arrays are identical. Sum: ${sum}`) : console.log(`Arrays are not identical. Found difference at ${indexDiff} index`);
}

Main(['10','20','30'],

['10','20','30'])