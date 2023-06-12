function Main(sentence, word) {
    let occurences = 0;
    sentence = sentence.split(' ');
    for (const tempWord of sentence) {
        if (tempWord == word) {
            occurences++;
        }
    }
    console.log(occurences);
}

Main('This is a word and it also is a sentence',

'is')