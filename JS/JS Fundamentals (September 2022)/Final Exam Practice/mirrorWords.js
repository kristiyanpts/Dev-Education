function Main(Input) {
    let pattern = /([@#])(?<firstWord>[A-Za-z]{3,})(\1)(\1)(?<secondWord>[A-Za-z]{3,})(\1)/g;
    let totalWordPairs = 0;
    let mirrorWords = [];

    while((valid = pattern.exec(Input)) !== null) {
        totalWordPairs++;
        if (Array.from(valid.groups["firstWord"]).reverse().join("") == valid.groups["secondWord"]) {
            mirrorWords.push(`${valid.groups["firstWord"]} <=> ${valid.groups["secondWord"]}`)
        }
    }
    totalWordPairs > 0 ? console.log(`${totalWordPairs} word pairs found!`) : console.log("No word pairs found!");
    if (mirrorWords.length > 0) {
        console.log("The mirror words are:");
        console.log(mirrorWords.join(", "));
    } else {
        console.log("No mirror words!");
    }
}

Main("#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#")