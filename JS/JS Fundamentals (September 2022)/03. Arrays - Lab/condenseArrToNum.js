function Main(Input) {
    let length = Input.length;

    for (let k = 0; k < length - 1; k++) {
        let tempArr = [];
        for (let i = 0; i < Input.length - 1; i++) {
            tempArr.push(Input[i] + Input[i + 1]);
        }
        Input = tempArr;
    }

    console.log(Input[0]);
}

Main([2,10,3])