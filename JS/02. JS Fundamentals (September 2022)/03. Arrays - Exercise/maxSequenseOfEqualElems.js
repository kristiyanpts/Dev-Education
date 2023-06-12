function Main(Input) {
    let longestLength = 1;
    let longestStart = 0;
    let currentLength = 1;
    let currentStart = 0;

    for (let i = 1; i < Input.length; i++) {
        if (Input[i] === Input[i - 1]) {
            currentLength++;
            if (currentLength > longestLength) {
                longestLength = currentLength;
                longestStart = currentStart;
            }
        } else {
            currentLength = 1;
            currentStart = i;
        }
    }

    let output = ""
    for (let i = longestStart; i < longestLength + longestStart; i++) {
        output += Input[i] + " ";
    }

    console.log(output);
}

Main([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])