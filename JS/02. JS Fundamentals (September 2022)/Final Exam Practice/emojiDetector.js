function Main(Input) {
    let emojiPattern = /(?<symbol>[:*])\1(?<emoji>[A-Z][a-z]{2,})\1\1/g;
    let numberPattern = /(?<number>\d)/g;
    let emojis = [];
    let treshhold = 1;
    let emojiCount = 0;

    while ((valid = emojiPattern.exec(Input)) !== null) {
        emojis.push([valid.groups["emoji"], valid.groups["symbol"].repeat(2)]);
    }

    while ((valid = numberPattern.exec(Input)) !== null) {
        treshhold *= Number(valid.groups["number"]);
    }

    emojiCount = emojis.length;
    let startingLength = emojis.length;
    for (let k = 0; k < startingLength; k++) {
        let asciiSum = 0;
        for (let i = 0; i < emojis[k][0].length; i++) {
            asciiSum += emojis[k][0].charCodeAt(i);
        }

        if (asciiSum < treshhold) {
            emojis.splice(k, 1);
            k--;
            startingLength--;
        }
    }

    console.log(`Cool threshold: ${treshhold}`);
    console.log(`${emojiCount} emojis found in the text. The cool ones are:`);
    for (const emojiInfo of emojis) {
        console.log(`${emojiInfo[1]}${emojiInfo[0]}${emojiInfo[1]}`);
    }
}

Main(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."])