function Main(Input) {
    let evenSum = 0;
    let oddSum = 0;

    for (const num of Input) {
        let tempNum = Number(num);

        if (tempNum % 2 === 0) {
            evenSum += tempNum;
        } else {
            oddSum += tempNum;
        }
    }

    console.log(evenSum - oddSum);
}

Main([1,2,3,4,5,6])