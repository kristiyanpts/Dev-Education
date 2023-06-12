function Main(Input) {
    for (let i = 0; i < Input.length; i++) {
        let tempNum = Array.from(Input[i].toString());
        if (tempNum.join("") === tempNum.reverse().join("")) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

Main([123, 323, 421, 121])