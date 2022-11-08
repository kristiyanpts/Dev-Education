function Main(Input) {
    let words = {};
    let wordsSearchingFor = Input.shift().split(' ');

    for (const word of wordsSearchingFor) {
        words[word] = 0;
    }

    Input = Input.shift().split(' ')
    while (Input.length > 0) {
        let tempWord = Input.shift();
        if (words.hasOwnProperty(tempWord)) {
            words[tempWord] = words[tempWord] + 1;
        }
    }

    for (const [word, timesUsed] of Object.entries(words).sort((a, b) => b[1] - a[1])) {
        console.log(`${word} - ${timesUsed}`);
    }
}

Main([

    'this sentence',
    
    'In', 'this', 'sentence', 'you', 'have',
    
    'to', 'count', 'the', 'occurrences', 'of',
    
    'the', 'words', 'this', 'and', 'sentence',
    
    'because', 'this', 'is', 'your', 'task'
    
    ])