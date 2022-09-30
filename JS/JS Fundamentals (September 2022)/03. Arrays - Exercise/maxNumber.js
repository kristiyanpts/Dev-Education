function Main(Input) {
    let maxNumbers = [];
    for (let i = 0; i < Input.length; i++) {
        let shouldAdd = true;
        for (let k = i; k < Input.length; k++) {
            if (Input[i] < Input[k]) {
                shouldAdd = false;
            }
        }

        if (shouldAdd && !maxNumbers.includes(Input[i])) {
            maxNumbers.push(Input[i]);
        }
    }

    console.log(maxNumbers.join(" "));
}

Main([1, 4, 3, 2])