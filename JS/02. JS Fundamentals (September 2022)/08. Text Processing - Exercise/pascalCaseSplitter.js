function Main(sentence) {
    let words = [];
    let tempword = "";
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i + 1] !== undefined) {
            tempword += sentence[i];
            if (sentence[i + 1] === sentence[i + 1].toUpperCase()) {
                words.push(tempword);
                tempword = "";
            }
        } else {
            tempword += sentence[i];
            words.push(tempword);
            tempword = "";
        }
    }

    console.log(words.join(", "));
}

Main('HoldTheDoor')