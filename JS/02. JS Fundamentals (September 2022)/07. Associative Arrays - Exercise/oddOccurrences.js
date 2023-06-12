function Main(Input) {
    let words = {};
    let sentence = Input.toString().split(' ');

    for (let word of sentence) {
        word = word.toLowerCase();
        if (words.hasOwnProperty(word)) {
            words[word]++;
        } else {
            words[word] = 1;
        }
    }

    let output = [];
    for (let [word, times] of Object.entries(words)) {
        if (times % 2 !== 0) {
            output.push(word);
        }
    }

    console.log(output.join(" "));
}

Main('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')