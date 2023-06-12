function Main(Input) {
    let word = Input[0];
    let vowels = ["a", "e", "i", "o", "u"];

    let pts = 0

    for (let i = 0; i < word.length; i++) {
        for (let k = 1; k <= vowels.length; k++) {
            if (word[i] === vowels[k - 1])
            {
                pts += k;
            }
        }
    }

    console.log(pts);
}

Main(["hi"])