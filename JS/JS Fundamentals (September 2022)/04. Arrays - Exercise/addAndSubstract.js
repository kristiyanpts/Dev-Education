function Main(Input) {
    let beforeSum = 0;
    let afterSum = 0;

    for (let i = 0; i < Input.length; i++) {
        let tempNum = Number(Input[i]);
        beforeSum += tempNum;
    }

    for (let i = 0; i < Input.length; i++) {
        let tempNum = Number(Input[i]);

        if (tempNum % 2 === 0) {
            tempNum += i;
        } else {
            tempNum -= i;
        }

        Input[i] = tempNum;
    }

    for (let i = 0; i < Input.length; i++) {
        let tempNum = Number(Input[i]);
        afterSum += tempNum;
    }

    console.log(`[ ${Input.join(", ")} ]`);
    console.log(beforeSum);
    console.log(afterSum);
}

Main([5, 15, 23, 56, 35])