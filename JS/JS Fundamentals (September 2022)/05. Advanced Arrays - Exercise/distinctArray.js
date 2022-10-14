function Main(Input) {
    for (let i = 0; i < Input.length; i++) {
        for (let k = 0; k < Input.length; k++) {
            if (k !== i && Input[i] === Input[k]) {
                Input.splice(k, 1);
                k--;
            }
        }
    }

    console.log(Input.join(" "));
}

Main([20, 8, 12, 2, 2, 2, 2, 2, 2, 2, 2, 13, 4,

    4, 8, 5])