function Main(words, sentence) {
    words = words.split(', ');
    let sentenceArr = sentence.split(' ');

    for (const word of sentenceArr) {
        for (const wordSearchingFor of words) {
            if (word.length === wordSearchingFor.length && word.includes("*")) {
                sentence = sentence.replace(word, wordSearchingFor);
            }
        }
    }

    console.log(sentence);
}

Main('great, learning',

'softuni is ***** place for ******** new programming languages')