function Main(sentence) {
    let specialWords = [];
    sentence = sentence.split(' ');

    for (let word of sentence) {
        if (word[0] === "#" && word.length > 1) {
            word = word.replace("#", "");
            let isEligiblle = true;
            for (const character of word) {
                if (!character.match(/[a-z]/i)) {
                    isEligiblle = false;
                }
            }
            if (isEligiblle) {
                specialWords.push(word);
            }
        }
    }

    console.log(specialWords.join("\n"));
}

Main('The symbol # is known #variously in English-speaking #regions as the #number sign')