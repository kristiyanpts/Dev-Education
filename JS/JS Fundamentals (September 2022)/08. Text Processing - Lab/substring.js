function Main(word, startingIndex, substringAmt) {
    let result = word.substring(startingIndex, startingIndex + substringAmt);
    console.log(result);
}

Main('SkipWord', 4, 7)