function Main(sentence, censoredWord) {
    while (sentence.includes(censoredWord)) {
        sentence = sentence.replace(censoredWord, "*".repeat(censoredWord.length))
    }
    console.log(sentence);
} 

Main('Find the hidden word', 'hidden')