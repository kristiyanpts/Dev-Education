function Main(fChar, sChar) {
    let chars = []
    for (let i = fChar.charCodeAt(0) + 1; i < sChar.charCodeAt(0); i++) {
        chars.push(String.fromCharCode(i));
    }

    console.log(chars.join(" "));
}

Main('#', ':')