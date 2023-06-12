function Main(Input) {
    let wordOccurrences = {};
    for (let word of Input) {
        if (wordOccurrences.hasOwnProperty(word)) {
            wordOccurrences[word] += 1;
        } else {
            wordOccurrences[word] = 1;
        }
    }
    for (const [word, times] of Object.entries(wordOccurrences).sort((a, b) => b[1] - a[1])) {
        console.log(`${word} -> ${times} times`);
    }
}

Main(["Here", "is", "the", "first", "sentence",

"Here", "is", "another", "sentence", "And",

"finally", "the", "third", "sentence"])