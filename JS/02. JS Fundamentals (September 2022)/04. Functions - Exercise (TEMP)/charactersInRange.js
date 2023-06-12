function Main(fChar, sChar) {
    let chars = []
    for (let i = fChar.charCodeAt(0) + 1; i < sChar.charCodeAt(0); i++) {
        chars.push(String.fromCharCode(i));
    }

    if (!chars[0]) {
        for (let i = sChar.charCodeAt(0) + 1; i < fChar.charCodeAt(0); i++) {
            chars.push(String.fromCharCode(i));
        }
    }

    console.log(chars.join(" "));
}

Main('C', '#')