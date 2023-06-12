function Main(word, sentence) {
    sentence = sentence.split(' ');
    let foundWord = false;
    for (const tempWord of sentence) {
        if (word.toLowerCase() === tempWord.toLowerCase()) {
            console.log(word);
            foundWord = true;
        }
    }
    if (!foundWord) {
        console.log(`${word} not found!`);
    }
}

Main('python',

'JavaScript is the best programming language')