function Main(Input) {
    let sum = 0;
    for (const obj of Input) {
        let tempNum = Number(obj);
        if (tempNum % 2 === 0) {
            sum += tempNum;
        }
    }

    console.log(sum);
}

Main(['1','2','3','4','5','6'])